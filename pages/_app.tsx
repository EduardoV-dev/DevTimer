import store from '../redux/store';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light } from '../services/theme';
import '../styles/styles.scss';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="shortcut icon" href="/devtimer-favicon.ico" type="image/x-icon" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={light}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp;