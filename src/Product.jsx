import { useState } from "react";

export default function Product({updateCartTotal}) {
  const [quantity, setQuantity] = useState(0);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity < 1) {
      return;
    }

    setQuantity(quantity - 1);
  }

  return (
    <div>
      <p>Product</p>

      <p>Quantity: {quantity}</p>

      <button onClick={incrementQuantity}>Increment</button>
      <button onClick={decrementQuantity}>Decrement</button>


      <button onClick={() => updateCartTotal(quantity)}>Add to Cart</button>
    </div>
  )
}