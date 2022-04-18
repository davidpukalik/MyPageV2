import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Project from "../components/projects/Project";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home: NextPage = () => {
  const [isNavBackgroundVisible, setIsNavBackgroundVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setIsNavBackgroundVisible(window.scrollY ? true : false);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>David Pukalík | Portfolio</title>
        <meta name="description" content="Page about David Pukalík. :)" />
      </Head>
      <Navbar isNavBackgroundVisible={isNavBackgroundVisible} />
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
