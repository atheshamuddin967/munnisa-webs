import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footers">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="footerlist">
                <h6>START A PROJECT</h6>
                <p>
                  We are ready for the challenge info@munissakareservices.com
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footerlist">
                <h6>SAY HELLO</h6>
                <ul>
                  <li>
                    <LuMapPin /> Office #12, 1 College Yard, 56 Winchester
                    Avenue,London NW67UA
                  </li>
                  <li>
                    <MdOutlinePhone />{" "}
                    <Link to="tel:02086292777">0208-6292777</Link>
                    <li>
                      <MdOutlinePhone />{" "}
                      <Link to="tel:07951404949">0795-1404949</Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footerlist">
                <h6>Jobs</h6>
                <p>
                  We are always looking for talent info@munissakareservices.com
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="socialicon">
                <div className="footerlist">
                  <h6>Social links</h6>
                </div>
                <ul>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        all &#169;copy right reserved by munissa care services
      </div>
    </div>
  );
}

export default Footer;
