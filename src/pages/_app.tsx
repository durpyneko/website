// Next
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Chakra
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/lib/theme";

// Components
import Navbar from "@/components/Navbar";
import KofiButton from "@/components/KofiButton";
import Footer from "@/components/Footer";

// CSS
import "@/styles/globals.css";
import Header from "@/components/Header";

const helloConsole = [
  "color: purple",
  "font-size: 16px",
  "font-weight: bold",
  "font-family: monospace",
  "background-color: pink",
  "padding: 10px",
  "border: 2px solid purple",
].join(";");

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("%cHello there! ", helloConsole);
  });
}

// Font
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Analytics />
      <SpeedInsights />
      <Navbar />
      <Component {...pageProps} className={`${JetBrainsMono.className}`} />
      <KofiButton />
      <Footer />
    </ChakraProvider>
  );
}
