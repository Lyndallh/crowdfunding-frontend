import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import"../pages/HomePage.css";

function NavBar() {
  // WOULD LIKE TO ADD THIS WHEN I HAVE IMPLEMNTED A LOGOUT FUNCTIONALITY
  // if (localStorage.getItem("token")) {
  //   var authenticatedUser = true;
  // }
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li id="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>
{/* WOULD LIKE TO ADD THIS WHEN I HAVE IMPLEMNTED A LOGOUT FUNCTIONALITY
             {`${authenticatedUser ? "/logout" : "/login"}`}>             
            {authenticatedUser ? "Log Out": "Log In"}
            </Link> */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default NavBar;
