import Banner from "../components/banners/Banner";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import NoPropertyFound from "../components/property/NoPropertyFound";

export default function Home(props) {
  //console.log(props.propertiesForRent);
  //console.log(props.propertiesForSale);
  return (
    <div>
      <Banner
        properties={props.propertiesForRent}
        purpose={"for-rent"}
        title1={"Rental Homes for"}
        title2={"Everyone"}
        desc1={"Explore apartments, Villas, homes"}
        desc2={"and more..."}
        buttonText={"explore renting"}
      />
      <Banner properties={props.propertiesForSale} purpose={"for-sale"} />
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  return {
    props: {
      propertiesForSale: propertyForSale.hits,
      propertiesForRent: propertyForRent.hits,
    },
  };
}
