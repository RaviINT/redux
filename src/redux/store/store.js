import { legacy_createStore } from "redux";
import cakeReducer from "../reducers";
const store = legacy_createStore(cakeReducer);
export default store;
