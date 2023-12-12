import { FaHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="row">
        <div className="col-11 nav-wrap d-flex justify-content-between mx-auto p-3 align-items-center">
          <Link to={"/"} className="text-decoration-none text-black">
            <h6 className="fw-bold m-0">RESTAURANTS</h6>
          </Link>

          <Link to={"/favorites"} className="icon fs-3 text-danger">
            <FaHeart />
          </Link>
        </div>
        <div className="col-11 mx-auto">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
