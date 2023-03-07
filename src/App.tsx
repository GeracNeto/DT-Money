import { Transactions } from "./pages/Transaction";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  );
}
