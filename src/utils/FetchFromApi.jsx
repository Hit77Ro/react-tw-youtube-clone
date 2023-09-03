import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const BaseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BaseUrl,
  params: {
    maxResults: "70",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetcher = async (url) => {
  const { data } = await axios.get(`${BaseUrl}/${url}`, options);
  return data;
};
