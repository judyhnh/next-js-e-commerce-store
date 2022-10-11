import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
`;

export default function CheckOut(props) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // set cart in header back to 0
    props.setCardCookieCart([]);
    router.push('/cart/thankyou').catch(() => {});
  };

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
            </div>
            <button data-test-id="checkout-confirm-order">Confirm Order</button>
          </form>
        </div>
      </main>
    </div>
  );
}
