import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

font-family: 'Fira Code', monospace;
font-family: 'Inter', sans-serif;
font-family: 'Roboto', sans-serif;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Fira Code', 'Inter', 'Roboto', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  font-family: Fira Code;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
    font-family: Fira Code;
}

section {
    background-color: ${theme.colors.primaryBg};
}

`