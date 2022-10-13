import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getCards } from '../../database/connect';

const indexWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const cardSetStyles = css`
  margin: 0 0 30px 30px;
  border: 3px dashed green;
  padding: 10px;
  font-size: 20px;

  background-color: rgba(38, 99, 39, 0.3);
  width: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const h1Style = css`
  margin: 100px 0 50px 0;
  text-align: center;
  letter-spacing: 5px;
`;

const imgStyle = css`
  float: left;
  margin: 25px 0 0 30px;
  width: 500px;
  padding: 0;
`;
const contentStyle = css`
  display: flex;
  margin-bottom: 10px;
`;
const textStyles = css`
  margin-left: 20px;
  padding: 0 30px;
  width: 500px;

  h2 {
    text-align: center;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  h2:hover {
    cursor: pointer;
    color: pink;
  }
  h3 {
    font-size: 25px;
    float: left;
  }
`;
const textContainerStyle = css`
  font-size: 30px;
  padding: 0 20px 20px 20px;
  margin: 0 0 80px 15px;
  text-align: center;
`;
const productNameStyle = css`
  background-color: green;
  padding-left: 10px;
`;

const pageContentWrapper = css`
  margin-bottom: 200px;
`;

export default function ProductIndex(props) {
  return (
    <div css={pageContentWrapper}>
      <Head>
        <title>Products</title>
        <meta name="description" content="Overview of the products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 css={h1Style}>- Cards -</h1>
      <div css={textContainerStyle}>
        This is a short summary about the Products. Bla bla bla bla Please buy.
      </div>

      <div css={indexWrapperStyle}>
        {props.cardSets.map((set) => {
          return (
            <div key={`card-${set.id}`} css={cardSetStyles}>
              <div css={contentStyle}>
                <div css={imgStyle}>
                  <Link
                    href={`/products/${set.id}`}
                    data-test-id="product-<product id>"
                  >
                    <Image
                      src={set.src}
                      width="200px"
                      height="300px"
                      alt={set.alt}
                      className="imageHover"
                    />
                  </Link>
                </div>
                <div css={textStyles}>
                  <Link href={`/products/${set.id}`}>
                    <h2 css={productNameStyle}>{set.name}</h2>
                  </Link>
                  <div> Summary: {set.text}</div>
                  <strong>
                    <h3> {set.price} EUR </h3>
                  </strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const cards = await getCards();
  return {
    props: {
      cardSets: cards,
    },
  };
}
