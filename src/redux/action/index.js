// add item cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
// delete item cart
export const deleteCart = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
