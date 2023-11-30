import { type } from "so"
import "styled-components";
import { ThemeProps } from "./theme/types";

export type Theme = ThemeProps;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}