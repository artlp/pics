import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5Q7T0ekAICi-Z_p1pGUbs89IPZU8iOsSijcIMTbkSRg",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response)
  return response;
};
export default searchImages;
