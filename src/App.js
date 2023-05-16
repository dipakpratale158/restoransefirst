import React from 'react';
// import { CartContext } from "./store/CartProvider";
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
 
  return (
    <CartProvider>
       <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
