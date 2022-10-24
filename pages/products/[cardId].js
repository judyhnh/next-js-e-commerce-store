import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getCardById } from '../../database/cardSet';

const cardSetStyles = css`
  border: 3px solid green;
  padding: 20px;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: center;
  margin: 50px 0 200px 330px;
  width: 800px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const h1Style = css`
  text-align: center;
  font-size: 30px;
  background-color: green;
  letter-spacing: 8px;
  margin-top: 80px;
  padding: 5px 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const textStyles = css`
  margin-left: 30px;
  padding: 0 30px;
`;

const inputStyle = css`
  width: 30px;
  text-align: center;
`;

const buttonContainerStyle = css`
  margin-top: 250px;
  display: flex;

  button {
    margin-left: 2px;
    height: 50px;
    width: 50px;
    font-size: 30px;
    padding: 0;
    border: 1px solid green;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }
  button:hover {
    color: pink;
  }

  button::after {
    content: '';
    background-color: rgba(0, 153, 0, 0.6);
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
  }

  button :last-of-type {
    width: 100px;
    margin-left: 80px;
    font-size: 20px;
  }
  button :hover::after {
    top: 0px;
    left: 0px;
  }
  button :last-of-type::after {
    content: '';
    background-color: #efb8cb;
  }

  input {
    height: 50px;
    width: 50px;
    font-size: 20px;
    padding: 0;
    color: green;
    border: 1px solid green;
  }
`;
const pageContentWrapper = css`
  margin-bottom: 200px;
`;

export default function Card(props) {
  const [cartItem, setCartItem] = useState(1);
  const [cart, setCart] = useState(cartItem);

  const add = () => {
    setCartItem((count) => count + 1);
  };

  const substract = () => {
    if (cartItem > 0) {
      setCartItem((count) => count - 1);
    }
  };

  const addToCart = () => {
    const currentCart = props.cardCookieCart;
    let newCart;
    if (currentCart?.find((itemsInCart) => props.card.id === itemsInCart.id)) {
      newCart = currentCart.map((item) => {
        if (item.id === props.card.id) {
          return {
            ...item,
            cart: cartItem,
          };
        }
        return item;
      });
      setCart(props.card.cart);
    } else {
      newCart = [...currentCart, { id: props.card.id, cart: cartItem }];
      props.setCardCookieCart(newCart);
    }
  };

  if (props.error) {
    return (
      <div>
        <Head>
          <title>Card not found</title>
          <meta name="description" content="Card not found" />
        </Head>
        <h1>{props.error}</h1>
        Sorry, try the <Link href="/products">Products page</Link>
      </div>
    );
  }

  return (
    <div key={`card-${props.card.id}`} css={pageContentWrapper}>
      <h1 css={h1Style}>{props.card.name}</h1>

      <div css={cardSetStyles}>
        <Image
          src={props.card.src}
          width="300px"
          height="400px"
          alt={props.card.alt}
          data-test-id="product-image"
        />

        <div css={textStyles}>
          <div> Summary: {props.card.text}</div>
          <h3 data-test-id="product-price"> {props.card.price} EUR.-</h3>
          <div css={buttonContainerStyle}>
            <input
              data-test-id="product-quantity"
              css={inputStyle}
              readOnly
              value={cartItem}
            />
            <button
              onClick={() => {
                add();
              }}
            >
              +
            </button>

            <button
              onClick={() => {
                substract();
              }}
            >
              -
            </button>

            <button
              data-test-id="product-add-to-cart"
              onClick={() => {
                addToCart();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // set dynamic route
  const cardId = parseInt(context.query.cardId);
  // single card directly from database
  const cardMatches = await getCardById(cardId);

  // error msg if cardId not valid
  if (typeof cardMatches === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Card not found :(',
      },
    };
  }

  return {
    props: {
      card: cardMatches,
    },
  };
}
