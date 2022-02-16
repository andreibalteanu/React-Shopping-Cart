function CartItem({ id, name, price, qty }) {
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button>-</button>
        {qty}
        <button>+</button>
      </div>
      <div>Total: {qty * price} $</div>
    </div>
  );
}

export default CartItem;
