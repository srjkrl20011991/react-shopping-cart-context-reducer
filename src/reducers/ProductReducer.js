export const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { products: action.payload };
    default:
      return state;
  }
};
