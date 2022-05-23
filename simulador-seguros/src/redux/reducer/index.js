import { GET_USERS, GET_DETAIL_USER, GET_PRODUCTS_PER_USER } from "../actions";

const initialState = {
  users: [],
  detailUser: {},
  productsPerUser: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_DETAIL_USER:
      return {
        ...state,
        detailUser: action.payload,
      };
    case GET_PRODUCTS_PER_USER:
      return {
        ...state,
        productsPerUser: action.payload,
      };
    default:
      return state;
  }
}
