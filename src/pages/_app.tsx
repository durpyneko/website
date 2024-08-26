// Next
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Chakra
import { keyframes } from "@emotion/react";
import { Box, ChakraProvider } from "@chakra-ui/react";
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

const continuousGradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box position="relative" height={"100%"} minHeight={"100vh"}>
        <Box
          _before={{
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            background: "url('bg.gif')",
            filter: "brightness(0.2)",
            zIndex: -1,
          }}
        />
        <Header />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <Box className={JetBrainsMono.className}>
          <Component {...pageProps} />
        </Box>
        <KofiButton />
        <Box pt={10}>
          <Footer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
