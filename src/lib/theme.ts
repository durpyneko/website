// Chackra

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    customBackground: '#262626',
    customButtonBackground: "1d1d1d"
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // bg: mode('white', 'black')(props),
        bg: '#17151f',
        color: 'white',
      },
    }),
  },
  components: {
    /* Button: {
      // Example
      baseStyle: (props: StyleFunctionProps) => ({
        bg: '#1d1d1d', 
        color: 'white', 
        _hover: {
          bg: "#4c4c4c",
        },
      }),
    }, */
}
})

export default theme