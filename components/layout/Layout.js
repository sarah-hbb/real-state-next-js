import React from "react";
import classes from "./Layout.module.css";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Head>
        <title>Realtor</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
