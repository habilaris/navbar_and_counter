import { NavLink } from "react-router";
import styles from "./navbar.module.css";

function Navbar() {
  function handleClasses({ isActive }) {
    return `${styles.NavLink} ${isActive && styles.active}`;
  }

  return (
    <>
      <nav>
        <ul>
          <NavLink to="/" className={handleClasses}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className={handleClasses}>
            <li>About</li>
          </NavLink>
          <NavLink to="/mouse-counter" className={handleClasses}>
            <li>Mouse Counter</li>
          </NavLink>
          <NavLink to="/counter" className={handleClasses}>
            <li>Counter</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
