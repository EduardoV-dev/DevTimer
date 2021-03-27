import React from 'react';
import Head from 'next/head';
import { DashboardLayout } from '../components/layout';

interface Props {

}

const Dashboard: React.FC<Props> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;