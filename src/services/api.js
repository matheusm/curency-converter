import axios from "axios";

const api = axios.create({
  baseURL: "https://api.exchangeratesapi.io/latest?base=BRL",
});

export default api;
