import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react'
import { Provider, createClient } from 'urql'

const client = createClient({ url: 'http://localhost:4000/graphql'});

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider
                options={{
                  useSystemColorMode: true,
                }}
              >
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
