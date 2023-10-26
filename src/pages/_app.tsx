import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

// CSS
import "../styles/globals.css";

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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
