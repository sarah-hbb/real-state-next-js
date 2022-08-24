import React from "react";
import classes from "./PropertyItem.module.css";
import Card from "../ui/Card";
import Link from "next/link";
import Image from "next/image";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
//props.propertyData = propertyData
const PropertyItem = ({ propertyData }) => {
  // console.log(propertyData.userExternalID);
  return (
    <Card>
      <Link href={`/property/${propertyData.userExternalID}`} passHref>
        <li className={classes["property-item"]}>
          <div className={classes["property-item__image"]}>
            <Image
              src={propertyData.coverPhoto.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={classes["property-price"]}>
            <h3>
              {propertyData.isVerified && (
                <GoVerified className={classes["verified-icon"]} />
              )}
              {` AED `}
              {millify(propertyData.price)}
              {propertyData.rentFrequency && `/${propertyData.rentFrequency}`}
            </h3>
            <Image
              src={propertyData.agency?.logo?.url}
              width={"70em"}
              height={"43em"}
            />
          </div>

          <div className={classes["property-features"]}>
            {propertyData.rooms} <FaBed /> | {propertyData.baths} <FaBath /> |{" "}
            {millify(propertyData.area)} sqft <BsGridFill />
          </div>
          <div className={classes["property-info"]}>
            {propertyData.title.length > 30
              ? `${propertyData.title.substring(0, 30)}...`
              : propertyData.title}
          </div>
        </li>
      </Link>
    </Card>
  );
};

export default PropertyItem;
