import { Theme } from './style/theme';
import { DefaultTheme } from 'styled-components';

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}