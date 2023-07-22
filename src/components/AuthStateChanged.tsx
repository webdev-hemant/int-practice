import React, { useEffect, useState } from 'react';
import useAuth from '../hook/auth';
import authService from '@services/authService';
import { User } from 'firebase/auth';

const AuthStateChanged = ({ children }: { children: JSX.Element }) => {
  const auth: any = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService.waitForUser((userCred: User | null) => {
      auth.setUser(userCred);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
};

export default AuthStateChanged;
