import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

export default function Shop() {
  const [cartTotal, setCartTotal] = useState(0);

  // We have to make this a state
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // Pass this function into product have quantity variable
  function updateCartTotal(quantity) {
    setCartTotal(cartTotal + quantity);
  }

  function logger() {
    console.log(products[0].id);
  }

  return (
    <div>
      <Navbar cartTotal={cartTotal} />

      <div className="container">
        {products ? (
          <div className="flex flex-col gap-32">
            {products.map((product) => (
              <Product
                key={product.id}
                updateCartTotal={updateCartTotal}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <p>Loading Products...</p>
        )}

        <button onClick={logger}>Logger</button>
      </div>
    </div>
  );
}
