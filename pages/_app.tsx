import React from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '@redux/store';
import '@styles/global.css';
import { AuthProvider } from 'src/hook/auth';
import AppLayout from '@components/AppLayout';
import 'src/config/firebase.config';
import AuthStateChanged from '@components/AuthStateChanged';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthStateChanged>
    </AuthProvider>
  );
}

export default wrapper.withRedux(MyApp);
