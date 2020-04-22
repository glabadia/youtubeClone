import axios from "axios";
import key from "./getAPIKey";

// const max = 5;
// const part = "snippet";
// const type = "video";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/"
});

// const youtubeFetch = async search => {
//   const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${search}&type=${type}&part=${part}&maxResults=${max}`;

//   const response = await fetch(url);
//   const result = await response.json();

//   return result;
// };

// export default youtubeFetch;
