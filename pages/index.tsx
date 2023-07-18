import { IHomePageApi } from 'interfaces/homepage.interface';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage<IHomePageApi> = () => {
  // const { apiCardData } = useAppSelector((state) => state.homeReducer);

  return (
    <>
      <Head>
        <title>Order Medicines Online | Online Pharmacy From Truemeds</title>
        <meta name="description" content="write your description here..." />
        <link rel="shortcut icon" href="/icons/favicon.png" type="image/x-icon" />
      </Head>
      <main className="">
        <h1>This is boilerplate</h1>
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
