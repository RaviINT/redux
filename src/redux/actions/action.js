import { ADD_DATA, BUY_CAKE } from "./actionType";
import { MAKE_CAKE } from "./actionType";
export const buy_cake = () => {
  return {
    type: BUY_CAKE,
  };
};
export const make_cake = () => {
  return {
    type: MAKE_CAKE,
  };
};

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};
