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
import { useRouter } from "next/router";
import TranslationCS from "../public/locales/cs/translationCS.json";
import TranslationEN from "../public/locales/en/translationEN.json";

const Home: NextPage = () => {
  const [isNavBackgroundVisible, setIsNavBackgroundVisible] = useState<boolean>(false);
  const router = useRouter();
  let { locale } = router;
  locale = String(locale);
  const t = locale === "cs" ? TranslationCS : TranslationEN;

  useEffect(() => {
    setIsNavBackgroundVisible(window.scrollY ? true : false);
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
      <Navbar locale={t} isNavBackgroundVisible={isNavBackgroundVisible} />
      <Main />
      <About locale={t} />
      <Skills locale={t} />
      <Project locale={t} />
      <Contact locale={t} />
      <Footer />
    </div>
  );
};

export default Home;
