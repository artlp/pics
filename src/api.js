import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 5Q7T0ekAICi-Z_p1pGUbs89IPZU8iOsSijcIMTbkSRg",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImages;
