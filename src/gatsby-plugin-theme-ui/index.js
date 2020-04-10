import theme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...theme,
  initialColorMode: `light`,
  colors: {
    ...theme.colors,
    primary: '#000',
    secondary: '#73737D',
    accent: '#bb4600',
    grey: '#73737D',
    background: '#fff',
  },
};