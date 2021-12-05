import { UPDATE_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  user: {}
};

// Sets global user state
export default function(state = initialState, action) {

  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          userId: action.payload.userId
        }
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {}
      };
    default:
      return state;
  }
}
