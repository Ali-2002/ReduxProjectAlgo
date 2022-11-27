const nameInitialState = {
  linkActive: false,
};
export const name = (state = nameInitialState, action) => {
  switch (action.type) {
    case SET_LINKACTIVE:
      return { ...state, linkActive: payload };
    default:
      return state;
  }
};
