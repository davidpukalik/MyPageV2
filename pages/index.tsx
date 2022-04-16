import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

const Home: NextPage = () => {
  const [isNavBackground, setIsNavBackground] = useState<boolean>(true);

  return (
    <div>
      <Head>
        <title>David Pukalík | Portfolio</title>
        <meta name="description" content="Page about David Pukalík. :)" />
      </Head>
      <Navbar isNavBackground={isNavBackground} />
      <Main />
    </div>
  );
};

export default Home;
