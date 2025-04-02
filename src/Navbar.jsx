import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container flex flex-row justify-end align-center gap-16">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/shop" className="nav-btn">Shop</Link>

        {location.pathname === "/shop" && (
          <div>
            <p>Quantity: 0</p>
          </div>
        )  }
      </div>
    </nav>
  )
}