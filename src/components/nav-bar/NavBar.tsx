import { FC } from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

export const NavBar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};
