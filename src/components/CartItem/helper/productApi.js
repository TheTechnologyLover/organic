import { API } from "../../../backend";
const axios = require("axios");

export const fetchProduct = (id) => {
  return axios
    .get(`${API}/product/product/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
