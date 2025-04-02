import { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

export default function Shop() {
  const [cartTotal, setCartTotal] = useState(0);

  // Pass this function into product have quantity variable
  function updateCartTotal(quantity) {
    setCartTotal(cartTotal + quantity);
  }

  return (
    <div>
      <Navbar cartTotal={cartTotal} />

      <div className="container">
        {/* I don't think that we need to pass in any information of the current quantity we'll
            just have it contained with in a component and just pass in a function here to be used
            by the parent instead */}

        {/* Maybe just have an Id's array for products */}
        <Product updateCartTotal={updateCartTotal} />
        <Product updateCartTotal={updateCartTotal} />
        <Product updateCartTotal={updateCartTotal} />
        <Product updateCartTotal={updateCartTotal} />
      </div>
    </div>
  )
}