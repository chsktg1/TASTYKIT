import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  setCart: () => {},
  decQuantity: () => {},
  incQuantity: () => {},
});

export default CartContext;
