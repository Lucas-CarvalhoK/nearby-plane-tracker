import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import light from '../styles/theme/light'
import GlobalStyles from "@/styles/globals"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
