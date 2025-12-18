import React from "react";
import { products } from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      {/* Navbar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Paradise Nursery</h2>
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/products">Plants</Link> |{" "}
          <Link to="/cart">Cart ({totalQuantity})</Link>
        </div>
      </div>

      <h2>Indoor Plants</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.indoor.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button
              disabled={isAdded(p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {isAdded(p.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      <h2>Bonsai</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.bonsai.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button
              disabled={isAdded(p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {isAdded(p.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      <h2>Air-Purifying Plants</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.airPurifying.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button
              disabled={isAdded(p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {isAdded(p.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
