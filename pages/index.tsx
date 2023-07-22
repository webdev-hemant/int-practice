import { IHomePageApi } from 'interfaces/homepage.interface';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@components/navbar';
import HeroSection from '@modules/homepage/hero';
import AllProduct from '@components/allproduct';
import ProductCardWrapper from '@components/ProductcardWrapper';
import FaqWrapper from '@components/faqwrapper';
import { withPublic } from 'src/hook/route';

const Home: NextPage<IHomePageApi> = (props) => {
  const { auth } = props;
  const { user, loginWithGoogle, error, logout } = auth;
  console.log({ user: user?.displayName });
  return (
    <>
      <Head>
        <title>Safe gold</title>
        <meta name="description" content="write your description here..." />
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main>
        <Navbar loginWithGoogle={loginWithGoogle} logout={logout} disPlayName={user?.displayName} />
        <HeroSection />
        <AllProduct />
        <ProductCardWrapper />
        <FaqWrapper />
      </main>
    </>
  );
};

export default withPublic(Home);

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async () => {
//   await store.dispatch();
//   // console.log('State on server', store.getState());

//   return {
//     props: {
//       apiCardData: 'data',
//     },
//   };
// });
