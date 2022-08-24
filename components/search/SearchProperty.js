import React, { useState } from "react";
import classes from "./SearchProperty.module.css";
import { BsFilter } from "react-icons/bs";

const SearchProperty = (props) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const showFilters = () => {
    setSearchFilters((prvFilters) => !prvFilters);
    props.onSearch(searchFilters);
  };
  return (
    <div className={classes[`search-filter`]} onClick={showFilters}>
      <h3>Search Properties by filters</h3>
      <BsFilter className={classes["filter-icon"]} />
    </div>
  );
};

export default SearchProperty;
