import { Link } from "react-router-dom";
import Images from "../../images/Images";
import { useLanguage } from "../../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();

  return (
    <div className="main">
      <img src={Images.Carecenter} alt="hero" />
      <div className="main-details">
        {language === "en" && (
          <div className="overflow">
            <h3 data-aos="fade-right">
              Find Our Best Services Provided by our specialsits.
            </h3>
            <h5>Download our mobile app</h5>
          </div>
        )}
        {language === "arabic" && (
          <div className="overflow">
            <h3 data-aos="fade-right">
              ابحث عن أفضل الخدمات التي تقدمها خدماتنا المتخصصة.
            </h3>
            <h5>قم بتنزيل تطبيق الهاتف المحمول الخاص بنا</h5>
          </div>
        )}
        {language === "soomali" && (
          <div className="overflow">
            <h3 data-aos="fade-right">
              Soo hel adeegyadayada ugu Fiican oo ay bixiyaan khusuusiyadeena.{" "}
            </h3>
            <h5>Soo deji app-ka moobilka</h5>
          </div>
        )}
        {language === "bengali" && (
          <div className="overflow">
            <h3 data-aos="fade-right">
              আমাদের বিশেষজ্ঞ দ্বারা প্রদত্ত আমাদের সেরা পরিষেবা খুঁজুন.{" "}
            </h3>
            <h5>আমাদের মোবাইল অ্যাপ ডাউনলোড করুন</h5>
          </div>
        )}
        {language === "hindi" && (
          <div className="overflow">
            <h3 data-aos="fade-right">
              हमारे विशेष संस्थानों द्वारा प्रदान की जाने वाली हमारी सर्वोत्तम
              सेवाएँ ढूँढ़ें।
            </h3>
            <h5>हमारा मोबाइल ऐप डाउनलोड करें</h5>
          </div>
        )}
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
