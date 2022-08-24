import React from "react";
import classes from "./Banner.module.css";
import retnImg from "../../assets/rentalBanner.jpg";
import saleImg from "../../assets/sale.jpg";
import Card from "../ui/Card";
import PropertyList from "../property/PropertyList";
import Image from "next/image";

// props.properties
//props.purpose
const Banner = (props) => {
  const isARental = props.purpose === "for-rent" ? true : false;
  return (
    <div className={classes.banner}>
        <div className={classes["banner-image"]}>
          <Image src={isARental ? retnImg : saleImg} layout='fill' objectFit="cover"/>
        </div>
      <div className={classes["banner-text"]}>
        <h1>{isARental ? "Rent a home" : "buy a home"}</h1>
        <h2>{isARental ? "rental homes for" : "find, buy & own your"}</h2>
        <h2>{isARental ? "everyone" : "deram home"}</h2>
      </div>
      <PropertyList properties={props.properties} />
      <div className="curve"/>
    </div>
  );
};

export default Banner;
