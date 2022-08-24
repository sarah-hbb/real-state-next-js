import React from "react";
import classes from './PropertyList.module.css'
import PropertyItem from "./PropertyItem";

//props.properties
const PropertyList = (props) => {
  const { properties } = props;
  //console.log(properties);
  return (
    <ul className={classes['property-list']} >
      {properties.map((property) => (
        <PropertyItem propertyData={property} key={property.id} />
      ))}
    </ul>
  );
};

export default PropertyList;
