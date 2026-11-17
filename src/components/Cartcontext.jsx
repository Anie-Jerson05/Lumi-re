import { createContext } from "react";
import { useState } from "react";

export let Cart = createContext();

const Cartcontext = ({ children }) => {
  
  let [cartItam, setCartItam] = useState([]);
  let [qty, setQty] = useState({});
  

  return (
    <>
      <Cart.Provider value={{ cartItam, setCartItam, qty, setQty }}>
        {children}
      </Cart.Provider>
    </>
  );
};

export default Cartcontext;
