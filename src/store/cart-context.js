import React from 'react';

 const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  cartIsShown: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
});

export default CartContext;