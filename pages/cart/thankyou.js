import { css } from '@emotion/react';
import Lottie from 'lottie-react';
import Head from 'next/head';
import Confetti from './Confetti.json';

const thankYouStyle = css`
  display: flex;

  margin-right: 150px;

  h1 {
    color: green;
    text-align: center;
    letter-spacing: 5px;
    margin-top: 200px;
  }
`;

export default function ThankYouPage() {
  return (
    <div>
      <Head>
        <title>Thank you</title>
        <meta name="description" content="Thank you for your order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div css={thankYouStyle}>
          <Lottie loop={false} animationData={Confetti} />
          <h1>Thank you for your order! ☺︎</h1>
          <Lottie loop={false} animationData={Confetti} />
        </div>
      </main>
    </div>
  );
}
