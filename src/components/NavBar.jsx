import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default NavBar;
