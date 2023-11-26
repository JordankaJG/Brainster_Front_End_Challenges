import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Link to={"/"}>
      <div className="navBar">
        <div className="header">
          <h1>MUSIC DB</h1>
        </div>
      </div>
    </Link>
  );
};
export default NavBar;
