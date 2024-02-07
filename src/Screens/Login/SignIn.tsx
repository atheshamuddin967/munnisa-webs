import { Link } from "react-router-dom";
import Images from "../../images/Images";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row rows">
          <div className="col-sm-6">
            <div className="logininpt">
              <img src={Images.Logo} alt="Logo" />
              <div className="inpbox3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="inpbox3">
                <input
                  type={showPassword ? "text" : "password"}
                  id="name"
                  name="name"
                  placeholder="password"
                />
                {showPassword ? (
                  <FaRegEye onClick={togglePasswordVisibility} />
                ) : (
                  <FaRegEyeSlash onClick={togglePasswordVisibility} />
                )}
              </div>
              <p className="forget">
                <Link to="/">forget passowrd?</Link>
              </p>
              <div className="singBtn">
                <button>SignIn</button>
              </div>
              <p>
                don't have account? <Link to="/Signup">SignUp</Link>
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="loginImg">
              <img src={Images.Login} alt="LOgin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
