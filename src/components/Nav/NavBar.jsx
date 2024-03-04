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
    <>
    <div className="navbar">
      <h1 id="navbar-title">Equipme</h1>
      <nav className="menu">
        <ul id="navbar-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
            {auth.token ? (
          <li className="nav-item"><Link to="/" onClick={handleLogout}>Logout</Link></li>
              ):(
          <li className="nav-item"><Link to="/login">Login</Link></li>
              )
            }
        </ul>
      </nav>
      </div>
      <Outlet />
    </>   
  );
}
export default NavBar;
