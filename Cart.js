import CartItem from "./CartItem";
import { useState } from "react";

function Cart({ initialitems }) {
  const [items, setItems] = useState(initialitems);
  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);
  return (
    <div className="Cart">
      <h1>I AM CART</h1>
      <div className="Cart-items">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <h2>Grand Total:$ {grandTotal}</h2>
    </div>
  );
}

export default Cart;
