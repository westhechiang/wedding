import { injectGlobal } from 'styled-components';

// global css; only add to this if there are no other options
// FIXME: Delete this if this turns out to be unnecessary
// export const globalCSS = injectGlobal`
//   html {
//     height: 100%;
//     overflow-x: hidden;
//   }
// 
//   body {
//     height: 100%;
//     margin: 0;
//   }
// `;

export const theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    pink: '#E37562',
    salmon: '#EAA995',
  },
  font: {
    family: 'Arial, Helvetica, sans-serif',
    size: {
      xxxsmall: '10px',
      xxsmall: '12px',
      xsmall: '13px',
      small: '14px',
      medium: '15px',
      default: '16px',
      large: '18px',
      xlarge: '22px',
      xxlarge: '26px',
      xxxlarge: '35px',
    },
    weight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      heavy: '900',
    },
  },
  gutter: '20px',
  transition: '.2s ease-in-out',
  shadow: '1px 2px 2px 0 rgba(0, 0, 0, 0.3)',
  border: color => `1px solid ${color}`,
  borderRadius: '2px',
};

export default theme;
