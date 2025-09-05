import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MERN Stack Dashboard</title>
        <meta name="description" content="MERN Stack Dashboard Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to MERN Stack Dashboard</h1>
        <p>This is a placeholder page. Your actual dashboard components should be here.</p>
      </main>
    </div>
  );
}
