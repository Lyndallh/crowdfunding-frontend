import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

import { useAuth } from "../../hooks/use-auth";

function NavBar() {

  const {auth, setAuth} = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  }
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li id="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
            {auth.token ? (
              <Link to="/" onClick={handleLogout}>Logout</Link>
              ):(
                <Link to="/login">Login</Link>
              )
            }
          </li>
        </ul>
    </nav>
    <Outlet />
    </div>
  );
}
export default NavBar;
