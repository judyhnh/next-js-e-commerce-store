import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header.js';

const imgStyle = css`
  background-color: black;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  width: 100vw;
  height: 50vh;
  margin-top: 0;
`;

const contentContainer = css`
  background-color: black;
  margin-left: 500px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  display: inline-block;
  width: 800px;
  color: green;
  margin-bottom: 100px;
  margin-top: 20px;
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
  margin: 0;
  margin-bottom: 0;
  margin-top: 100px;
  margin-left: 200px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 100vw;
  background-color: black;
  text-align: center;
`;

const linkStyle = css`
  background-color: black;
  color: green;
  font-size: 50px;
  margin-bottom: 900px;
  margin-top: 0;
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
        <h1>Welcome to bØØtcamp land...</h1>
      </div>
      <div css={imgStyle}>
        <Image src="/droneThrone.png" width="500px" height="500px" />
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
