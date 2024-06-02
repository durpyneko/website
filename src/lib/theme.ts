// Chackra
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    accent_light: "#a393dd",
    accent_backup: "#877ab7",
    accent_dark: "#332e45",
    customBackground: "#262626",
    customButtonBackground: "#1d1d1d",
  },
  accent: {
    light: "#B00B69",
    default: "#B00B69",
    dark: "#420A55",
    bg: "#420A55",
    divider: "#042069",
    transparent: "transparent",
  },
  /*
   accent: {
    light: "#964c9c",
    default: "#7f4085",
    dark: "#68346d",
    bg: "#68346d",
    divider: "#474257",
    transparent: "transparent",
  },
   */
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: "white",
      },
    }),
  },
});

export default theme;
