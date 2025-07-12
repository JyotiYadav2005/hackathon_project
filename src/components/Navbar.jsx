import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
        Skill Swap
      </NavLink>
      <NavLink to="/users">Browse Users</NavLink>
    </nav>
  );
}
