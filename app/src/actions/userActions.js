import axios from "axios";
import { FETCH_USER, UPDATE_USER } from "./types";

export const fetchUser = () => async dispatch => {
  console.log("fetching");
  let res;
  try {
    res = await axios.get("/api/user");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch(e){}
};

export const updateUser = user => async dispatch => {
  console.log("updateUser");

  dispatch({ type: UPDATE_USER, payload: user });
};
