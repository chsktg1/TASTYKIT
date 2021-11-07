import React from 'react'

const CartContext = React.createContext({
  cartItems: [],
  setCart: () => {},
  decQuantity: () => {},
  incQuantity: () => {},
  orderPlaced: false,
  setOrderPlaced: () => {},
})

export default CartContext
