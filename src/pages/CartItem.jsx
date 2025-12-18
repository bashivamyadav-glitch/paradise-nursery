import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { removeItem } from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Navbar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/products">Plants</Link> |{" "}
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <img src={item.image} alt={item.name} width="80" />
              <div>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() =>
                     dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                }>
                     -
                </button>

                <span>{item.quantity}</span>
                <button onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                }>
                    +
                </button>

              </div>

              <button
                style={{ background: "red", color: "white" }}
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          ))}

          <h3>Grand Total: ₹{totalAmount}</h3>

          <button
            style={{
              padding: "10px 20px",
              marginRight: "20px",
              cursor: "pointer",
            }}
          >
            Checkout (Coming Soon)
          </button>

          <Link to="/products">
            <button style={{ padding: "10px 20px", cursor: "pointer" }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
