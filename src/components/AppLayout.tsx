import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useAuth from '../hook/auth';

const AppLayout = ({ children }: { children: JSX.Element }) => {
  const auth: any = useAuth();

  const router = useRouter();

  if (router.pathname !== '/login') {
    return (
      <main>
        <nav
          style={{
            background: 'blue',
            color: 'white',
            padding: '10px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <span>{auth.user?.displayName}</span>
        </nav>
        {children}
      </main>
    );
  } else {
    return children;
  }
};

export default AppLayout;
