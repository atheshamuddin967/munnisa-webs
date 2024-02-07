import { Link } from "react-router-dom";
import Images from "../../images/Images";

function Hero() {
  return (
    <div className="main">
      <img src={Images.Carecenter} alt="hero" />
      <div className="main-details">
        <h3>Find Our Best Services Provided by our specialsits.</h3>
        <h5>Download our mobile app</h5>
        <ul>
          <li>
            <Link to="/">
              <img src={Images.playstore} alt="" />
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={Images.apple} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
