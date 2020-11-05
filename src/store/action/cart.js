export const addItemsToCart = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data,
  };
};

export const removeItemFromCart = (data) => {
  return {
    type: "REMOVE_ITEM",
    payload: data,
  };
};

