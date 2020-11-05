const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        token: action.payload.token,
        user: action.payload.user,
      };

    case "LOGOUT":
      return {};

    default:
      return state;
  }
};

export default userReducer;
