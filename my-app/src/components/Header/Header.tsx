import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBagHeartFill } from "react-icons/bs";
import Logo from "../../logo.png";

const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="navBar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navigation">
          <h5>HOME</h5>
          <h5>BIKES</h5>
          <h5>GEAR</h5>
          <h5>PARTS</h5>
          <h5>TIRES</h5>
          <h5>SERVICE_INFO</h5>
          <h5>CATALOGUES</h5>
          <h5>CONTACT</h5>
        </div>
        <div className="icons">
          <span className="icon">
            <BiSearchAlt />
          </span>
          <span className="icon">
            <BsFillBagHeartFill />
          </span>
        </div>
      </div>
      <hr />
      <h1>Bikes</h1>
      <hr />
    </div>
  );
};
export default NavBar;
