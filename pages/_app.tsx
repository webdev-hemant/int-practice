import React from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '@redux/store';
import '@styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
