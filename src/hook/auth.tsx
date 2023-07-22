import authService from '@services/authService';
import { createContext, useContext, useState } from 'react';

const authContext = createContext(null);

export function AuthProvider(props: any) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState('');

  const loginWithGoogle = async () => {
    const { error, user } = await authService.loginWithGoogle();

    setUser(user ?? null);
    setError(error ?? '');
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };
  const value = { user, error, loginWithGoogle, logout, setUser };

  return <authContext.Provider value={value} {...props} />;
}

export default function useAuth() {
  return useContext(authContext);
}
