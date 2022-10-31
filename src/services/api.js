import axios from "axios";
//BASE DA URL: https://api.themoviedb.org/3
//URL DA API: /movie/now_playing?api_key=b570c746b0d07b381b44ff105cf96846&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
