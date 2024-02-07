import { Link, useLocation } from "react-router-dom";

import Logo from "../../src/images/Logo.png";
function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => {
    // If the current pathname is not available, default to "/Home"
    const activePath = location.pathname || "/Home";

    // Check if the activePath is the same as the provided path or it's an empty string (defaulting to "/Home")
    return activePath === path;
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/Home">
            <img src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/Home") ? "active" : ""}`}
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/Hire") ? "active" : ""}`}
                  to="/Hire"
                >
                  Hire us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Create a service
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/Signin" className="singup">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
