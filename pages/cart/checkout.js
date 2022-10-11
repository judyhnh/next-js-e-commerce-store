import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const pageContentWrapper = css`
  margin-bottom: 200px;
`;
export default function CheckOut() {
  const router = useRouter();

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

        <form>
          <div>
            <p>Billing</p>
            <label>
              First Name
              <input required data-test-id="checkout-first-name" />
            </label>
            <label>
              Last Name <input required data-test-id="checkout-last-name" />
            </label>
            <label>
              E-Mail{' '}
              <input required type="email" data-test-id="checkout-email" />
            </label>
          </div>
          <div>
            <p>Shipping</p>
            <label>
              Address <input required data-test-id="checkout-address" />
            </label>
            <label>
              City <input required data-test-id="checkout-city" />
            </label>
            <label>
              Postal Code{' '}
              <input
                maxLength="4"
                required
                data-test-id="checkout-postal-code"
              />
            </label>
            <label>
              Country <input required data-test-id="checkout-country" />
            </label>
          </div>
          <div>
            <p>Payment</p>
            <label>
              Credit Card Number{' '}
              <input
                maxLength="19"
                placeholder="1111 2222 3333 4444"
                required
                data-test-id="checkout-credit-card"
              />
            </label>
            <label>
              Expiration Date{' '}
              <input
                maxLength="5"
                placeholder="MM/YY"
                required
                data-test-id="checkout-expiration-date"
              />
            </label>
            <label>
              Security Code{' '}
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
      </main>
    </div>
  );
}
