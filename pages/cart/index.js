import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { cardSets } from '../../database/cardSet';
import { addCardToCart, removeCardFromCart } from '../../utils/cartFunctions';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

const cartStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttonContainer {
    display: flex;
    align-items: center;

    .priceInfo {
      font-size: 20px;
      margin-top: 10px;
      margin-right: 20px;
    }

    button {
      height: 30px;
      width: 30px;
      font-size: 25px;
      margin-left: 5px;
      padding: 0;
      border: 1px solid green;
      cursor: pointer;
      position: relative;
      background-color: rgba(0, 0, 0, 0);
      text-align: center;
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
      top: 2px;
      left: 2px;
      transition: 0.2s;
    }
    button :last-of-type {
      font-size: 20px;
    }
    button :last-of-type::after {
      background-color: pink;
    }
  }

  .cardContainer {
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    padding: 20px;
    border: 3px dashed green;
    width: 900px;
    background-color: rgba(38, 99, 39, 0.2);
  }
  .cardInfoContainer {
    display: flex;
    align-items: center;
    .imgInfo {
      margin-right: 20px;
    }
    .cardInfo {
      padding: 0;
      margin: 0;
      p :first-of-type {
        font-size: 25px;
        color: green;
      }
    }
  }
`;

const amountPriceContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: right;
  margin-right: 283px;
  font-size: 25px;
  margin-top: 20px;
  padding: 10px 20px;
  box-shadow: rgb(252, 179, 249) 0px 0px 0px 3px,
    rgb(31, 193, 27) 0px 0px 0px 6px, rgb(110, 149, 196) 0px 0px 0px 9px,
    rgb(200, 212, 227) 0px 0px 0px 12px, rgb(20, 133, 44) 0px 0px 0px 15px;

  p {
    margin: 0;
  }
  button {
    margin-top: 20px;
    font-size: 20px;
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
`;
const h1Style = css`
  margin-bottom: 80px;
  text-align: center;
  margin-top: 50px;
  letter-spacing: 8px;
`;

const cartEmptyStyle = css`
  margin: 100px 50px 500px 100px;

  a {
    text-decoration: none;
    font-size: 30px;
    color: #18272f;
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
`;

const pageContentWrapper = css`
  margin-bottom: 500px;
`;

export default function CartIndex(props) {
  const [currentCardsCart, setCurrentCardsCart] = useState(props.currentCart);

  function totalSumOfCards(currentCart) {
    return currentCart.reduce((accumulator, product) => {
      return accumulator + product.price * product.cart;
    }, 0);
  }
  function totalAmountOfCards(currentCart) {
    return currentCart
      .map((product) => product.cart)
      .reduce((totalAmount, currentAmount) => totalAmount + currentAmount, 0);
  }
  const totalSum = totalSumOfCards(currentCardsCart);
  const totalAmount = totalAmountOfCards(currentCardsCart);

  return (
    <div css={pageContentWrapper}>
      <Head>
        <title>Shopping Cart</title>
        <meta
          name="description"
          content="Overview of the products and payment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {totalAmount === 0 ? (
          <div css={cartEmptyStyle}>
            <h1>Oh, no! Your cart is empty!</h1>
            <h2>Please have a look at our products</h2>
            <Link href="/products">⇢ Buy here</Link>
          </div>
        ) : (
          <div>
            <h1 css={h1Style}>- Here are your selected cards -</h1>
            <div css={cartStyles}>
              {currentCardsCart.map((card) => {
                return (
                  <div
                    key={`card-${card.id}`}
                    data-test-id={`cart-product-${card.id}`}
                    className="cardContainer"
                  >
                    <div className="cardInfoContainer">
                      <div className="imgInfo">
                        <Image
                          alt={card.alt}
                          src={card.src}
                          width="100px"
                          height="120px"
                        />
                      </div>
                      <div className="cardInfo">
                        <p>{card.name}</p>
                        <p>{card.text}</p>
                      </div>
                    </div>
                    <div className="buttonContainer">
                      <div className="priceInfo">
                        <div data-test-id="cart-product-quantity-<product id>">
                          Quantity: {card.cart}
                        </div>
                        <div>Value: {card.price * card.cart} EUR.-</div>
                      </div>
                      <button
                        onClick={() => {
                          const newCookie = addCardToCart(card.id);
                          props.setCardCookieCart(newCookie);

                          const newCart = card.cart + 1;
                          const updatedCart = currentCardsCart.map((product) =>
                            product.id === card.id
                              ? { ...product, cart: newCart }
                              : product,
                          );
                          setCurrentCardsCart(updatedCart);
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          const newCardCookie = removeCardFromCart(card.id);
                          props.setCardCookieCart(newCardCookie);

                          const newCartItem = card.cart > 1 ? card.cart - 1 : 0;
                          const updatedCart = currentCardsCart.map((product) =>
                            product.id === card.id
                              ? { ...product, cart: newCartItem }
                              : product,
                          );
                          setCurrentCardsCart(updatedCart);
                        }}
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          card.cart = 0;
                          // create new var and filter the cards, those quantity is not 0
                          const newCartNoCookie = currentCardsCart.filter(
                            (deleteAll) => deleteAll.cart !== 0,
                          );
                          // then update current useState with the new array
                          setCurrentCardsCart(newCartNoCookie);
                          // get cookies and
                          const currentCart = getParsedCookie('cart');
                          // get current cards in cart
                          const currentCards = currentCart.find(
                            (cardInCart) => cardInCart.id === card.id,
                          );
                          // then set current value of cart to 0
                          currentCards.cart = 0;
                          // create new cart so we can again filter cards !== 0 and get leave remaining cards
                          const updatedCart = currentCart.filter(
                            (currentCardInCart) => currentCardInCart.cart !== 0,
                          );
                          // update value in header
                          props.setCardCookieCart(updatedCart);
                          setStringifiedCookie('cart', updatedCart);
                        }}
                      >
                        ⌫
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div css={amountPriceContainer}>
              <p>Total Amount: {totalAmount} </p>
              <p>Total Price: {totalSum} EUR</p>
              <Link href="/cart/checkout">
                <button>Continue with Payment</button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export function getServerSideProps(context) {
  const cards = cardSets;
  const currentCookies = context.req.cookies.cart
    ? JSON.parse(context.req.cookies.cart)
    : [];

  const currentCart = currentCookies.map((product) => {
    const itemInCart = cards.find((card) => card.id === product.id);
    return { ...itemInCart, ...product };
  });

  return {
    props: { currentCart },
  };
}
