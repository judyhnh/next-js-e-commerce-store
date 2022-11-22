import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const navStyles = css`
  font-family: 'Stalinist One';
  align-content: right;
  overflow: hidden;
  height: 80px;

  a {
    text-decoration: none;
    color: #18272f;
    font-weight: 700;
    position: relative;
    margin-left: 10px;
  }

  a::before {
    content: '';
    background-color: rgba(0, 153, 0, 0.6);
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 8px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  a:hover::before {
    bottom: 0;
    height: 100%;
  }

  p {
    display: inline;
    color: black;
    background-color: #efb8cb;
    font-size: 12px;
  }
`;

const alignRight = css`
  float: right;
  margin: 15px 20px 0 0;
`;
const alignLeft = css`
  float: left;
  margin: 10px 5px 0 13px;
  color: rgba(0, 153, 0, 0.6);
  font-size: 25px;
  letter-spacing: 2px;
  padding: 3px 3px;
  border: 2px dashed green;

  :hover {
    cursor: pointer;
  }
`;

export default function Header(props) {
  const totalCards = props.cardCookieCart.reduce(function (
    accumulator,
    current,
  ) {
    return accumulator + current.cart;
  },
  0);
  return (
    <header>
      <nav css={navStyles}>
        <div css={alignRight}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart" data-test-id="cart-link">
            Cart
          </Link>
          <p>[{totalCards}]</p>
        </div>

        <Image src="/droneLogo.png" width="50" height="50" />

        <Link href="/">
          <div css={alignLeft}>Game of Drones</div>
        </Link>
      </nav>
    </header>
  );
}
