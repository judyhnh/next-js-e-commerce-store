import Head from 'next/head';

export default function ThankYouPage() {
  return (
    <div>
      <Head>
        <title>Thank you</title>
        <meta name="description" content="Thank you for your order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Thank you for your order!</h1>
      </main>
    </div>
  );
}
