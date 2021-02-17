import '../styles/styles.scss';
import { ThemeProvider } from 'styled-components';
import { light } from '../services/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
