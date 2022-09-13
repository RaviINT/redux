import { ADD_DATA, BUY_CAKE } from "../actions/actionType";
import { MAKE_CAKE } from "../actions/actionType";

const initialState = {
  noOfCake: 10,
  test_data: [],
};
const cakeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    case MAKE_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake + 1,
      };

    case ADD_DATA:
      return {
        ...state,
        test_data: [...state.test_data, payload],
      };
    default:
      return state;
  }
};
export default cakeReducer;
