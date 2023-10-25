// NextJS
import Head from "next/head";

// Chakra Imports
import { Center } from "@chakra-ui/react";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Components
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Center className={`${JetBrainsMono.className}`} fontSize={"4xl"}>
          Hello World!
        </Center>
      </main>
    </>
  );
}
