import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Project from "../components/projects/Project";
import Contact from "../components/contact/Contact";

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
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
