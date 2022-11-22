import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const imgStyle = css`
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  width: 100vw;
  height: 50vh;
  margin-top: 0;
  margin-left: 300px;
`;

const contentContainer = css`
  background-color: black;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  display: inline-block;
  width: 800px;
  color: green;
  margin: 20px 0 100px 500px;
  padding: 100px;
  text-align: center;
  p {
    margin: 0;
    padding: 0;
    font-size: 50px;
    letter-spacing: 5px;
  }
`;

const title = css`
  color: green;
  margin: 100px 0 0 200px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 100vw;
  background-color: black;
  text-align: center;
`;

const linkStyle = css`
  background-color: black;
  color: green;
  font-size: 50px;
  margin: 0 0 900px 0;
  letter-spacing: 10px;
  height: 100px;
  text-align: center;
  padding: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  a {
    text-decoration: none;
    color: green;
  }
  a:hover {
    color: white;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Overview of the cards" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Global
        styles={css`
          body {
            background-color: green;
          }
        `}
      />

      <div css={title}>
        <h1>Welcome to Game of Drones...</h1>
      </div>
      <div css={imgStyle}>
        <Image
          src="/droneThrone.png"
          width="500px"
          height="500px"
          alt="throne made out of swords with flying drones in the background"
        />
      </div>
      <div css={contentContainer}>
        <p>Are you ready to fight against drones?</p>
      </div>
      <div css={linkStyle}>
        <Link href="/products" data-test-id="products-link">
          ... yarn start ▷▷▷
        </Link>
      </div>
    </div>
  );
}
