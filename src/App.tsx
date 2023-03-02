import { Transactions } from "./pages/Transaction";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { ThemeProvider } from "styled-components";
import { Summary } from "./components/Summary";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <Summary />

      <GlobalStyle />
    </ThemeProvider>
  );
}
