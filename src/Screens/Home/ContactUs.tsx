import { useLanguage } from "../../context/LanguageContext";

function ContactUs() {
  const { language } = useLanguage();

  return (
    <div className="contact">
      <div className="container">
        <div className="headings text-center">
          {language === "en" && <h2>Contact Us</h2>}
          {language === "hindi" && <h2>हमारी टीम</h2>}
        </div>
        <div className="formsLayout">
          <div className="shad"></div>
          <div className="formdata">
            <div data-aos="zoom-in" className="inpbox">
              {language == "en" && <label htmlFor="name">Name</label>}
              {language == "hindi" && <label htmlFor="name">नाम</label>}
              <input type="text" id="name" name="name" />
            </div>
            <div data-aos="zoom-in" className="inpbox">
              {language == "en" && <label htmlFor="email">Email</label>}
              {language == "hindi" && <label htmlFor="email">ईमेल</label>}
              <input type="text" id="email" name="Email" />
            </div>
            <div data-aos="zoom-in" className="inpbox">
              {language == "en" && <label htmlFor="number">Number</label>}
              {language == "hindi" && <label htmlFor="number">संख्या</label>}
              <input type="text" id="number" name="number" />
            </div>
            <div data-aos="zoom-in" className="inpbox">
              {language == "en" && (
                <label htmlFor="description">Description</label>
              )}
              {language == "hindi" && (
                <label htmlFor="description">विवरण</label>
              )}
              <textarea rows={5} id="description" name="description" />
            </div>
            {language == "en" && (
              <div className="inpbox">
                <button>Submit</button>
              </div>
            )}
            {language == "hindi" && (
              <div className="inpbox">
                <button>प्रस्तुत करें</button>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
