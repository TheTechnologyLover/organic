import { API } from "../../../backend";
const axios = require("axios");

export const fetchProducts = () => {
  return axios
    .get(`${API}/product/getall`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
