import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const global = {
  styles: {
    global: {
      a: {
        textDecoration: 'none',
      },
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme: ThemeConfig = extendTheme({ config, global });

export default theme;
