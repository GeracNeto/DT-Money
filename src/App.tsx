import { Transactions } from "./pages/Transaction";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { ThemeProvider } from "styled-components";
import { Summary } from "./components/Summary";

import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./pages/Transaction/styles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

      <GlobalStyle />
    </ThemeProvider>
  );
}
