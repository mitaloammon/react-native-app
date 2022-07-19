import 'styled-components'

declare module 'styled-components' {
  export interface defaultTheme {
    colors: {
      primary: string,
      onPrimary: string,
      secondary: string,
      onSecondary: string,
    };
  }
}
