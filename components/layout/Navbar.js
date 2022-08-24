import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { FcMenu, FcHome, FcAbout, FcSearch, FcKey } from "react-icons/fc";

const Navbar = () => {
  const [isButtomActive, setIsButtomActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuButtomToggler = () => {
    if (isButtomActive) {
      setIsButtomActive(false);
      setIsMenuActive(false);
    } else {
      setIsButtomActive(true);
      setIsMenuActive(true);
    }
  };
  return (
    <header className={classes.header}>
      <h1>Realtor</h1>

      {/* <div
        className={`${isMenuActive ? classes["is-active"] : ""} ${
          classes["navbar-items"]
        }`}
      > */}

      <div
        className={classes['navbar-items']}
      >
        <button
          className={`${isButtomActive ? classes["is-active"] : ""} ${
            classes["burger-menu"]
          } `}
          onClick={menuButtomToggler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`${isMenuActive ? classes["is-active"] : ""} ${
            classes["menu"]
          } `}
          onClick={menuButtomToggler}
        >
          <Link href={"/"} > Home</Link>
          <Link href={"/search"}> Search</Link>
          <Link href={"/search?purpose=for-sale"} > Buy a Property</Link>
          <Link href={"/search?purpose=for-rent"}>Rent a property</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
