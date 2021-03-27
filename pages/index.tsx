import React from 'react';
import Head from 'next/head';
import { HomeLayout } from '../components/layout';

interface Props {

}

const Home: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeLayout />
    </>
  );
}

export default Home;