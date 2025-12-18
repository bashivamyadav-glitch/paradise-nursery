import CartItem from "./pages/CartItem";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <div className="landing">
              <h1 style={{ color: "white", fontSize: "3rem" }}>
                Paradise Nursery
              </h1>
              <Link to="/products">
                <button
                  style={{
                    padding: "12px 22px",
                    fontSize: "1.2rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          }
        />

        {/* Product List Page */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
