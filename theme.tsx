import { ThemeProvider, createGlobalStyle, css } from 'styled-components'

export const ScrollbarStyles = css`
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.blueGray900} #e5e5e5;

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: ${(props) => props.theme.blueGray900};
    }

    &::-webkit-scrollbar-track {
        background: #e5e5e5;
    }
`

const ssTheme = {
    primaryDark: '#011b10',
    primaryDarkTint1: '#01471F',
    primary: '#007257',
    primaryShade1: '#017a5e',
    primaryTint1: '#019875',
    primary1: '#133a1b',
    secondary: '#b7bf96',
    tertiary: '#e4deae',
    tertiaryTint1: '#faf8ef',
    linkColor: '#038CD7',

    textLight: '#414e48',
    transition: '0.2s ease-in-out',

    //New Colors
    vibrantGreen: '#2FBF97',
    red400: '#FA3B56',

    green300: '#9CA18D',
    green400: '#628272',
    green500: '#21574A',
    green700: '#14342C',

    cream100: '#FBF8F6',
    cream200: '#F8F1ED',
    cream500: '#D39B75',

    blueGray100: '#F1F5F9',
    blueGray200: '#E2E8F0',
    blueGray300: '#CBD5E1',
    blueGray400: '#94A3B8',
    blueGray500: '#64748B',
    blueGray600: '#475569',
    blueGray700: '#334155',
    blueGray900: '#0F172A',

    // screenSizes
    screenXs: '320px',
    screenSm: '640px',
    screenMd: '768px',
    screenLg: '1024px',
    screenXl: '1280px',
    screen2Xl: '1536px',

    //Icons
    width: '20px',
    height: '20px',
    strokeWidth: 1.1,

    //Fonts
    serif: `gambetta, serif`,
    secondaryFont: `satoshi, sans-serif`,
    marcellus: `marcellus, serif`,

    // Font sizes
    textSm: '0.812rem',
    textBase: '1rem',
    textMd: '1.125rem',
    textLarge: '1.2rem',
    heading4: '1.44rem',
    heading3: '1.728rem',
    heading2: '2.074rem',
    heading1: '2.488rem',
    headingXl: '2.986rem',
    headingXxl: '3.583rem',

    /* Spacing 
    --------------------*/

    spacingMobile: '1.25rem',
    spacingTablet: '2rem',
    spacingTabletHorizontal: '3rem',
    spacingDesktop: '5rem',

    0: 0,
    0.5: '0.25rem', //4px
    1: '0.5rem', //8px
    1.5: '0.75rem', //12px
    2: '1rem', //16px
    2.5: '1.25rem', //20px
    3: '1.5rem', //24px
    3.5: '1.75rem', //28px
    4: '2rem', //32px
    4.5: '2.25rem', //36px
    5: '2.5rem', //40px
}

export const Theme = ({ children }) => {
    return <ThemeProvider theme={ssTheme}>{children}</ThemeProvider>
}

export const GlobalTheme = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'satoshi', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
}


html,body{
    scroll-padding-top: 8rem;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    border: none;
    background: transparent;
    cursor: pointer;
}

ul {
    list-style: none;
}

/* Marcellus - 400 */
@font-face {
    font-family: 'marcellus';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/marcellus/marcellus-regular.woff2') format('woff2'),
        url('/fonts/marcellus/marcellus-regular.woff') format('woff');
}
/* Gambetta - 400 */
@font-face {
    font-family: 'gambetta';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/gambetta/Gambetta-Regular.ttf') format('ttf'),
}

/* Gambetta - 500 */
@font-face {
    font-family: 'gambetta';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local(''),
        url('/fonts/gambetta/Gambetta-Medium.ttf') format('ttf'),
}


/* satoshi - 400 */
@font-face {
  font-family: 'satoshi';
  src: url('/fonts/satoshi/Satoshi-Regular.woff2') format('woff2'),
       url('/fonts/satoshi/Satoshi-Regular.woff') format('woff');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}

/* satoshi - 500 */
@font-face {
  font-family: 'satoshi';
  src: url('/fonts/satoshi/Satoshi-Medium.woff2') format('woff2'),
       url('/fonts/satoshi/Satoshi-Medium.woff') format('woff');
       font-weight: 500;
       font-display: swap;
       font-style: normal;
}

/* satoshi - 700 */
@font-face {
  font-family: 'satoshi';
  src: url('/fonts/satoshi/Satoshi-Bold.woff2') format('woff2'),
       url('/fonts/satoshi/Satoshi-Bold.woff') format('woff');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
}

/* satoshi - 800 */
@font-face {
  font-family: 'satoshi';
  src: url('/fonts/satoshi/Satoshi-Black.woff2') format('woff2'),
       url('/fonts/satoshi/Satoshi-Black.woff') format('woff');
       font-weight: 800;
       font-display: swap;
       font-style: normal;
}
`
