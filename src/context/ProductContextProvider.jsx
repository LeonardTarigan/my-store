import { useState } from "react";
import ProductContext from "./ProductContext";

function ProductContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
