// Default NextJS
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

// Chakra Imports
import { Center } from "@chakra-ui/react";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Components
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>durpy's site v2</title>
        <meta name="description" content="erm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Center className={`${JetBrainsMono.className}`} fontSize={"4xl"}>
          Hello World!
        </Center>
      </main>
    </>
  );
}
