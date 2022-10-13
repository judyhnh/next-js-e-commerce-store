import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const mainStyles = css`
  margin: 0;
`;

export default function Layout(props) {
  return (
    <>
      <Header
        cardCookieCart={props.cardCookieCart}
        setCardCookieCart={props.cardCookieCart}
      />
      <main css={mainStyles}>{props.children}</main>
      <Footer />
    </>
  );
}
