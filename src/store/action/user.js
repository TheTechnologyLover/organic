export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
