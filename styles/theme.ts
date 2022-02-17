import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// const global = {
//   styles: {
//     global: {
//       a: {
//         textDecoration: 'underline',
//       },
//     },
//   },
// };

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme: ThemeConfig = extendTheme({ config });

export default theme;
