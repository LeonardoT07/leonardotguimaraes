import { typographyVariants } from './typographyVariants';

export const dark = {
  color: {
    primary: '#ffffff',
    secondary: '#cccccc',
    contrast: '#0099ff',
  },
  background: {
    primary: '#181818',
    secondary: '#151515',
    contrast: '#383838',
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const zIndex = {
  toggleMenu: 10,
  toggleBars: 20,
};

export default {
  dark,
  typographyVariants,
  breakpoints,
  zIndex,
  fontFamily: '\'Poppins\', sans-serif',
  borderRadius: '12px',
  transition: '200ms ease-in-out',
};
