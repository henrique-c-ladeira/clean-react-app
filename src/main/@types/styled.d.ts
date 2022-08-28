/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ThemeInterface } from '../../presentation/theme/ThemeInterface';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
