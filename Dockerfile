FROM node:18-alpine AS builder
ENV NODE_ENV production
RUN apk add --no-cache libc6-compat yq --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community git
WORKDIR /app
COPY . .
RUN yq --inplace --output-format=json '.dependencies = .dependencies * (.devDependencies | to_entries | map(select(.key | test("^(typescript|@types/*|@upleveled/)"))) | from_entries)' package.json
ENV FLY_IO true
RUN yarn install --frozen-lockfile
RUN yarn build

# Initialize runner layer
FROM node:18-alpine AS runner
ENV NODE_ENV production
ENV FLY_IO true
# Install necessary tools
RUN apk add bash postgresql
WORKDIR /app

# Copy built app
COPY --from=builder /app/.next ./.next

# Copy only necessary files to run the app (minimize production app size, improve performance)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.env.production ./

# Copy start script and make it executable
COPY --from=builder /app/scripts ./scripts
RUN chmod +x /app/scripts/fly-io-start.sh

ENV NODE_ENV production
ENV FLY_IO true
ENV PORT 8080

CMD ["./scripts/fly-io-start.sh"]
