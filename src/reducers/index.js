import { combineReducers } from "redux";
import { fetchData } from "./fetchData";
import { setId } from "./setData";

const rootReducer = combineReducers({
  fetchData,
  setId
});

export default rootReducer;
