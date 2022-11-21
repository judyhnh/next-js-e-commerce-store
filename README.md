![goD Logo](public/godLogo.png)

## ▶ Description

Welcome to game of drones. My fictional e-commerce store, that offers handmade trading cards!

## ▶ Functionalities

- `landing page`
- products page: with all cards displayed
- a single page for each card with details
  - toggle the counter and add cards to the cart with the button below
  - total quantity shown in the header
- `cart page`
  - displaying all cards in the cart with the correct quantity and price for each
  - total count of items and the total sum of the cart
  - adjust the quantities of items before proceeding to checkout
- `checkout page`
- `thank you page`

## ▶ Technologies

- Next.js
- React.js
- Postgres.js
- Emotion
- Jest (Unit tests)
- Playwright (E2E tests)
- TypeScript
- GitHub Actions

## ▶ Setup instructions

- Clone the repository with `git clone <repo>`
- Setup the database by downloading and installing PostgreSQL
- Create a user and a database
- Create a new file `.env`
- Copy the environment variables from `.env-example` into `.env`
- Replace the placeholders xxxxx with your username, password and name of database
- Install dotenv-cli with `yarn add dotenv-cli`
- Run `yarn install` in your command line
- Run the migrations with `yarn migrate up`
- Start the server by running `yarn dev`

## Deploy on Fly.io
- Sign up on Fly.io
- On the Fly.io Tokens page, generate a new Fly.io access token named GitHub Actions Deploy Token and copy it from the text box that appears - it will only be shown once
- In your GitHub repo under Settings → Secrets → Actions, click the New repository secret button at the top right of the page and create a new token with the name FLY_API_TOKEN and the token you copied as the secret
- On the command line, log in to Fly.io using the following command and enter your credentials in the browser window that appears:
flyctl auth login
- Create an app, specifying the name using only lowercase letters and dashes:
flyctl apps create --name <app name>
- Create the Fly.io config files as demonstrated in the lecture (also available in the Next.js example repo)
- Change your database/connect.ts as in the lecture: only run config() from dotenv-safe if the FLY_IO environment variable is not set
- Change your next.config.js as in the lecture: disable linting and type checking on build, since we do this earlier in the GitHub Actions deploy process
- Add database credentials using Fly.io secrets (the credentials will be randomly generated for security):

![goD screenshot](public/screenshot1.png)
![goD screenshot](public/screenshot2.png)
