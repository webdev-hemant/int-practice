/* eslint-disable */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from './auth';

export function withPublic(Component: any) {
  return function WithPublic(props: any) {
    const auth: any = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (auth.user) {
        // router.replace('/');
      }
    }, []);

    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: any) {
  return function WithProtected(props: any) {
    const auth: any = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!auth.user) {
        router.replace('/');
      }
    }, []);

    return <Component auth={auth} {...props} />;
  };
}
