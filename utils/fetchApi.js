import axios from "axios";

// baseUrl = rapidapi host
export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
  const {data}= await axios.get(
    (url),
    {
      headers: {
        "X-RapidAPI-Key": "d47710cb19msh11ef750ad167de9p1b18c2jsn3a115f4f46e4",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    })

    return data;
};


//const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/properties/detail',
//   params: {externalID: '4937770'},
//   headers: {
//     'X-RapidAPI-Key': 'd47710cb19msh11ef750ad167de9p1b18c2jsn3a115f4f46e4',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };