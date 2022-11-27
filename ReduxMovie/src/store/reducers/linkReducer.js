import { ActionTypes } from "../actions/actions-types";

const nameInitialState = {
  linkActive: false,
};
export const linkReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LINK_ACTIVE:
      return { ...state, linkActive: action.payload };
    default:
      return state;
  }
};
