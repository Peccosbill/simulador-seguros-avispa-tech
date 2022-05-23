import axios from 'axios';
export const GET_USERS = "GET_USERS";
export const GET_DETAIL_USER = "GET_DETAIL_USER";
export const GET_PRODUCTS_PER_USER = "GET_PRODUCTS_PER_USER";

export const getUsers = () => {
  return async function (dispatch) {
    await axios
      .get("https://master--magical-salamander-2d7087.netlify.app/clients")
      .then((response) => {
        return dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      });
  };
};

export const getDetailUser = (idUser) => {
  return async function (dispatch) {
    await axios
      .get(
        `https://master--magical-salamander-2d7087.netlify.app/clients/${idUser}.json`
      )
      .then((response) => {
        return dispatch({
          type: GET_DETAIL_USER,
          payload: response.data,
        });
      });
  };
};

export const getProductsPerUser = (idUser, index) => {
  return async function (dispatch) {
    await axios
      .get(
        `https://master--magical-salamander-2d7087.netlify.app/clients/${idUser}.json`
      )
      .then((response) => {
        return dispatch({
          type: GET_PRODUCTS_PER_USER,
          payload: response.data.products[index],
        });
      });
  };
};
