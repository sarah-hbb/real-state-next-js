export const fetchPropertyDetail = async (id) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d47710cb19msh11ef750ad167de9p1b18c2jsn3a115f4f46e4",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`,
      options
    );
    const data =await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
