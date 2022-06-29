import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../src/theme';
import { Provider } from 'jotai'
import { userAtom } from '../_atoms/user'
// import SimpleReactLightbox from 'simple-react-lightbox'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export const cache = createCache({ key: 'css', prepend: true });
import 'antd/dist/antd.css';
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import "../style.css"

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const { initialState } = pageProps;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    // <SimpleReactLightbox>
      <Provider initialValues={initialState && getInitial(initialState)}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <CacheProvider value={cache}>
            <Head>
              <title>HealthInMonde</title>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
        </MuiPickersUtilsProvider>
      </Provider>
    // </SimpleReactLightbox>
  );
}

const getInitial = (state) => {
  let values = [];
  if (state.user) values.push([userAtom, state.user]);
  return values;
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
