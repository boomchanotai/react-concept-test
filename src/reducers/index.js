import counterReducer from "./counter";
import user from "./users";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  user,
});

export default allReducers;
