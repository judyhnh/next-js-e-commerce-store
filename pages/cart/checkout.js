import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getCards } from '../../database/connect';

const pageContentWrapper = css`
  margin-bottom: 200px;
  margin-top: 50px;
  width: 900px;
  margin-left: 100px;
  h1 {
    text-align: center;
  }
  p {
    background-color: rgba(42, 141, 42, 0.19);
    border-bottom: solid 3px green;
    font-size: 30px;
    letter-spacing: 3px;
  }
  button {
    margin-top: 20px;
    font-size: 30px;
    letter-spacing: 5px;
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

const formContainer = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .formStyle {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-left: 10px;
    flex-direction: column;
    border: 2px dashed green;
    height: 25px;
  }
  label {
    font-size: 25px;
    flex-direction: column;

    margin-left: 50px;
  }
`;
const paymentStyle = css`
  margin-bottom: 50px;

  input {
    text-align: center;
  }
  .totalStyle {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    border-top: 3px solid green;
    font-size: 30px;
  }
`;

export default function CheckOut(props) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // set cart in header back to 0
    props.setCardCookieCart([]);
    router.push('/cart/thankyou').catch(() => {});
  };
  function totalSumOfCards(currentCart) {
    return props.currentCart.reduce((accumulator, product) => {
      return accumulator + product.price * product.cart;
    }, 0);
  }
  function totalAmountOfCards(currentCart) {
    return props.currentCart
      .map((product) => product.cart)
      .reduce((totalAmount, currentAmount) => totalAmount + currentAmount, 0);
  }
  const totalSum = totalSumOfCards(props.currentCardsCart);
  const totalAmount = totalAmountOfCards(props.currentCardsCart);

  return (
    <div css={pageContentWrapper}>
      <Head>
        <title>Check Out</title>
        <meta
          name="description"
          content="Overview of the selected products and payment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>- Continue with your order -</h1>
        <div css={formContainer}>
          <form onSubmit={handleSubmit} className="formStyle">
            <div>
              <p>⇢ Billing</p>

              <label>
                First Name:
                <input required data-test-id="checkout-first-name" />
              </label>

              <label>
                Last Name: <input required data-test-id="checkout-last-name" />
              </label>
              <label>
                E-Mail:
                <input required type="email" data-test-id="checkout-email" />
              </label>
            </div>
            <div>
              <p>⇢ Shipping</p>
              <label>
                Address:
                <input required data-test-id="checkout-address" />
              </label>
              <label>
                City: <input required data-test-id="checkout-city" />
              </label>
              <label>
                Postal Code:
                <input
                  maxLength="4"
                  required
                  data-test-id="checkout-postal-code"
                />
              </label>
              <label>
                Country: <input required data-test-id="checkout-country" />
              </label>
            </div>
            <div css={paymentStyle}>
              <p>⇢ Payment</p>
              <label>
                Credit Card:
                <input
                  maxLength="19"
                  placeholder="1111 2222 3333 4444"
                  required
                  data-test-id="checkout-credit-card"
                />
              </label>
              <label>
                Exp. Date:
                <input
                  maxLength="5"
                  placeholder="MM/YY"
                  required
                  data-test-id="checkout-expiration-date"
                />
              </label>
              <label>
                Security Code:
                <input
                  maxLength="3"
                  placeholder="123"
                  required
                  data-test-id="checkout-security-code"
                />
              </label>
              <div className="totalStyle">
                <span>Total amount of Cards: {totalAmount}</span>
                <span>Total Sum: {totalSum} Eur.-</span>
              </div>
            </div>
            <button data-test-id="checkout-confirm-order">Confirm Order</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cards = await getCards();
  const currentCookies = context.req.cookies.cart
    ? JSON.parse(context.req.cookies.cart)
    : [];
  const currentCart = currentCookies.map((item) => {
    const cardsInCart = cards.find((card) => card.id === item.id);
    return { ...cardsInCart, ...item };
  });
  return {
    props: { currentCart },
  };
}
