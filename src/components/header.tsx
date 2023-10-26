import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>durpy's site</title>
        <meta
          name="description"
          content="Hey, I'm durpyneko. Welcome to my site!"
        />
        <meta name="keywords" content="Vercel, Portfolio, website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta property="og:image" content="/favicon.png" />
      </Head>
    </>
  );
}
