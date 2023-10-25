import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>durpy's site</title>
        <meta
          name="description"
          content="Hey! That's is my portfolio url you are looking at >.>"
        />
        <meta name="keywords" content="Vercel, Portfolio, website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
    </>
  );
}
