import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Logo from "../../src/images/Logo.png";
import { useApi } from "../context/Api";
import { IoIosLogOut } from "react-icons/io";

function Navbar() {
  const { user } = useApi();
  const users: any = user;
  const authentication = users?.email;
  const location = useLocation();

  const isActive = (path: string) => {
    // If the current pathname is not available, default to "/Home"
    const activePath = location.pathname || "/Home";

    // Check if the activePath is the same as the provided path or it's an empty string (defaulting to "/Home")
    return activePath === path;
  };
  const { setLanguage, language } = useLanguage();
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };
  const handleLogout = () => {
    // Clear user credentials from localStorage
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    window.location.reload();
    // Call the signoutUser function if available

    // Redirect to the home page or any other desired page after logout
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
            {language === "en" && (
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
                  {/* <Link className="nav-link" to="/Home"> */}
                    <a className="nav-link" href="#contact">
                      Create a Booking
                    </a>
                    {/* </Link> */}
                </li>
              </ul>
            )}
            {language === "bengali" && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Home") ? "active" : ""}`}
                    to="/Home"
                  >
                    হোম
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Hire") ? "active" : ""}`}
                    to="/Hire"
                  >
                    আমাদের কাছে নিয়োগ করুন
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    একটি সেবা তৈরি করুন
                  </Link>
                </li>
              </ul>
            )}
            {language === "soomali" && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Home") ? "active" : ""}`}
                    to="/Home"
                  >
                    guriga
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Hire") ? "active" : ""}`}
                    to="/Hire"
                  >
                    na shaqaaleysii
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    adeeg abuur
                  </Link>
                </li>
              </ul>
            )}
            {language === "hindi" && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Home") ? "active" : ""}`}
                    to="/Home"
                  >
                    घर
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Hire") ? "active" : ""}`}
                    to="/Hire"
                  >
                    हमें भर्ती करें
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    सेवा बनाएं
                  </Link>
                </li>
              </ul>
            )}
            {language === "arabic" && (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Home") ? "active" : ""}`}
                    to="/Home"
                  >
                    بيت
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${isActive("/Hire") ? "active" : ""}`}
                    to="/Hire"
                  >
                    استئجار لنا
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    إنشاء خدمة
                  </Link>
                </li>
              </ul>
            )}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <select name="" id="" onChange={handleLanguageChange}>
                  <option value="en">en</option>
                  <option value="hindi">हिंदी</option>
                  <option value="bengali">বাংলা</option>
                  <option value="soomali">somaliyeed</option>
                  <option value="arabic">عربي</option>
                </select>
              </li>

              <li className=" n2">
                {language == "en" && (
                  <Link className="GuideLine" to="/Covid">
                    Covid Guideline
                  </Link>
                )}
                {language == "hindi" && (
                  <Link className="GuideLine" to="/Covid">
                    कोविड गाइडलाइन
                  </Link>
                )}
                {language == "bengali" && (
                  <Link className="GuideLine" to="/Covid">
                    কোভিড নির্দেশিকা
                  </Link>
                )}
                {language == "soomali" && (
                  <Link className="GuideLine" to="/Covid">
                    tilmaamaha covid
                  </Link>
                )}
                {language == "arabic" && (
                  <Link className="GuideLine" to="/Covid">
                    لمبادئ التوجيهية كوفيد
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {authentication ? (
                  <button className="logout" onClick={handleLogout}>
                    <IoIosLogOut />
                  </button>
                ) : (
                  <>
                    {" "}
                    {language === "en" && (
                      <Link to="/Signin" className="singup">
                        SignUp
                      </Link>
                    )}
                    {language === "bengali" && (
                      <Link to="/Signin" className="singup">
                        নিবন্ধন
                      </Link>
                    )}
                    {language === "soomali" && (
                      <Link to="/Signin" className="singup">
                        saxiix
                      </Link>
                    )}
                    {language === "hindi" && (
                      <Link to="/Signin" className="singup">
                        साइन अप
                      </Link>
                    )}
                    {language === "arabic" && (
                      <Link to="/Signin" className="singup">
                        اشتراك
                      </Link>
                    )}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
