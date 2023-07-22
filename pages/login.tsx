import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { withPublic } from 'src/hook/route';

interface IProps {
  auth: any;
}

const Login: NextPage<IProps> = (props) => {
  const { auth } = props;
  const { user, loginWithGoogle, error } = auth;

  useEffect(() => {
    console.log({ user });
    console.log(auth);
  }, [user]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.uid}</h1>
    </div>
  );
};

export default withPublic(Login);
