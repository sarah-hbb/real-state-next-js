import React, { Fragment, useState } from "react";
import {useRouter} from 'next/router';

import SearchFilters from "../../components/search/SearchFilters";
import SearchProperty from "../../components/search/SearchProperty";
import PropertyList from '../../components/property/PropertyList'
import NoPropertyFound from "../../components/property/NoPropertyFound";

import { fetchApi , baseUrl} from "../../utils/fetchApi";
import { GoRadioTower } from "react-icons/go";

const Search = (props) => {
    const [searchFilters, setSearchFilters] = useState(true);
    
    
    const router = useRouter();
    const query =router.query;
    //console.log(query);
  
  const searchHandler=(searchInput)=>{
    setSearchFilters(searchInput)
  }
  return (
    <Fragment>
      <SearchProperty onSearch={searchHandler} />
      {searchFilters && <SearchFilters />}
      <h1>{`properties for ${router.query.purpose === 'for-sale' ? 'for sale': 'for rent'}`}</h1>
      <PropertyList properties={props.properties}/>
      {props.properties.length=== 0 && <NoPropertyFound/>}
    </Fragment>
  );
};

export async function getServerSideProps({query}){
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';


    // fetch data from api upon request [search filter]
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);


    return{
        props:{
            properties :data?.hits
        }
    }
}

export default Search;
