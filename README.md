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

![goD screenshot](public/screenshot1.png)
![goD screenshot](public/screenshot2.png)
