import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string,
      title: string,
      button: string,
      buttonHover: string,
      background: string,
      secondaryBackground: string,
      backgroundActive: string,
      accent: string,
      secondaryAccent: string
    }
    devices: {
      mobileS: string,
      mobileM: string,
      mobileL: string,
      tablet: string,
      laptop: string,
      laptopL: string,
      desktop: string
    }
  }
}
