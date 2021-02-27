import '../styles/styles.scss';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ThemeProvider } from 'styled-components';
import { light } from '../services/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp;