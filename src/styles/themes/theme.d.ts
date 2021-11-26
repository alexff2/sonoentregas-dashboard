import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      green: string;
      green2: string;
      champagne: string;
      tangerine: string;
      tangerine: string;
      gray: string;
      grayLigth: string;
      backgroud: string;
      text: string;    
    }

    space: number[]

    borderRadius: string
  }
}