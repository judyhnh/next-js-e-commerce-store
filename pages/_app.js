import { css, Global } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout.js';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies.js';

function MyApp({ Component, pageProps }) {
  const [cardCookieCart, setCardCookieCart] = useState([]);

  useEffect(() => {
    const currentCart = Cookies.get('cart') ? getParsedCookie('cart') : [];

    setCardCookieCart(currentCart);
  }, []);

  useEffect(() => {
    setStringifiedCookie('cart', cardCookieCart);
  }, [cardCookieCart]);
  console.log(cardCookieCart);

  return (
    <>
      <Global
        styles={css`
          @import url(https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Source+Code+Pro:ital,wght@1,200;1,300&family=Space+Mono&display=swap);

          @import url(https://fonts.googleapis.com/css?family=Stalinist+One:regular);

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html {
            position: relative;
            min-height: 100%;
          }

          h1 {
            font-family: 'Stalinist One';
            letter-spacing: 3px;
          }

          body,
          html {
            margin: 0;
            padding: 0;

            font-family: 'Amatic SC';
          }

          .imageHover:hover {
            opacity: 0.7;
            transition: 0.5s;
            cursor: pointer;
          }
          button {
            font-family: 'Amatic SC';
          }
        `}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout
        cardCookieCart={cardCookieCart}
        setCardCookieCart={setCardCookieCart}
      >
        <Component
          {...pageProps}
          cardCookieCart={cardCookieCart}
          setCardCookieCart={setCardCookieCart}
        />
      </Layout>
    </>
  );
}

export default MyApp;
