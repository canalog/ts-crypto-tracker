// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor1: string;
    textColor2: string;
    accentColor: string;
  }
}