import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import"../pages/HomePage.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li id="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default NavBar;
