import { API } from "../../../backend";
const axios = require("axios");

export const signin = (email,password) => {
  return axios
    .post(
      `${API}/auth/signin`,
      {
        password,
        email
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {"err" : "Wrong password/email"};
    });
};

export const signup = (firstname , lastname , email , password) => {
  return axios
    .post(
      `${API}/auth/signup`,
      {
        firstname,
        lastname,
        password,
        email
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return {"err" : err};
    });
};
