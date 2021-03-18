import '../styles/styles.scss';
import 'nprogress/nprogress.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light } from '../services/theme';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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