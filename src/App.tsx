import { Transactions } from './pages/Transaction'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
