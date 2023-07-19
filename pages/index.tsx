import { IHomePageApi } from 'interfaces/homepage.interface';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@components/navbar';
import HeroSection from '@modules/homepage/hero';
import AllProduct from '@components/allproduct';
import ProductCardWrapper from '@components/ProductcardWrapper';
import FaqWrapper from '@components/faqwrapper';

const Home: NextPage<IHomePageApi> = () => {
  return (
    <>
      <Head>
        <title>Safe gold</title>
        <meta name="description" content="write your description here..." />
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main>
        <Navbar />
        <HeroSection />
        <AllProduct />
        <ProductCardWrapper />
        <FaqWrapper />
      </main>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async () => {
//   await store.dispatch();
//   // console.log('State on server', store.getState());

//   return {
//     props: {
//       apiCardData: 'data',
//     },
//   };
// });
