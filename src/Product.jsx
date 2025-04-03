import { useState } from "react";

export default function Product({ updateCartTotal, title, image, price }) {
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

  function updateAndChange(quantity) {
    setQuantity(0);
    updateCartTotal(quantity);
  }

  return (
    <div className="card">
      <div className="flex flex-row justify-between product-container gap-32">
        <div>
          <img className="product-img" src={image} alt="Product" />
        </div>

        <div className="flex flex-col gap-24">
          <div className="flex flex-row">
            <p>{title}</p>
            <p>{price}</p>
          </div>

          <div>
            <p>Quantity: {quantity}</p>

            <button onClick={incrementQuantity}>Increment</button>
            <button onClick={decrementQuantity}>Decrement</button>
          </div>

          <button onClick={() => updateAndChange(quantity)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
