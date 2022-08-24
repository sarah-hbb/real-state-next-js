import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

import { filterData, getFilterValues } from "../../utils/filterData";

import classes from "./SearchFilters.module.css";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  //console.log(filterData);
  const router = useRouter();

  // updating filters state by updating URL
  const searchPropertiesHandler = (filterValues) => {
    console.log(filterValues);
    const path = router.pathname;
    const query = router.query;
    //console.log(query);
    const values = getFilterValues(filterValues);
    //console.log(values);

    //updating query
    values.forEach((v) => {
      if (v.value && filterValues?.[v.name]) {
        query[v.name] = v.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <Fragment>
      <div className={classes.filters}>
        {filterData.map((filter) => (
          <div key={filter.queryName}>
            <label>{filter?.placeholder}</label>
            <select
              onChange={(e) =>
                searchPropertiesHandler({ [filter.queryName]: e.target.value })
              }
              value={filter.value}
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SearchFilters;
