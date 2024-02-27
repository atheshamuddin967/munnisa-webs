import React, { useEffect } from "react";
import { ServiceData, ServiceData5 } from "../../Data/ServicesData";
import { ServiceData2 } from "../../Data/ServicesData";
import { ServiceData3 } from "../../Data/ServicesData";
import { ServiceData4 } from "../../Data/ServicesData";
import AOS from "aos";
import { useLanguage } from "../../context/LanguageContext";
function Services() {
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  return (
    <div className="services">
      <div className="container">
        <div className="headings ">
          {language === "en" && <h2>Services we provide.</h2>}
          {language === "bengali" && <h2>আমরা যে সেবা প্রদান করি।</h2>}
          {language === "soomali" && (
            <h2>Nala talinta adeega ee aan bixino.</h2>
          )}

          {language === "hindi" && <h2>हमारी प्रदान की जानेवाली सेवाएं।</h2>}
          {language === "arabic" && <h2>الخدمات التي نقدمها.</h2>}
        </div>
        {language === "en" && (
          <div className="row ">
            {ServiceData.map((item: any) => (
              <div data-aos="zoom-in" className="col-lg-3 col-md-4 col-sm-6">
                <div className="servicedetails">
                  <div className="iconBox">
                    {React.createElement(item.images, { size: 30 })}
                  </div>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {language === "arabic" && (
          <div className="row ">
            {ServiceData5.map((item: any) => (
              <div data-aos="zoom-in" className="col-lg-3 col-md-4 col-sm-6">
                <div className="servicedetails">
                  <div className="iconBox">
                    {React.createElement(item.images, { size: 30 })}
                  </div>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {language === "bengali" && (
          <div className="row ">
            {ServiceData3.map((item: any) => (
              <div data-aos="zoom-in" className="col-lg-3 col-md-4 col-sm-6">
                <div className="servicedetails">
                  <div className="iconBox">
                    {React.createElement(item.images, { size: 30 })}
                  </div>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {language === "soomali" && (
          <div className="row ">
            {ServiceData4.map((item: any) => (
              <div data-aos="zoom-in" className="col-lg-3 col-md-4 col-sm-6">
                <div className="servicedetails">
                  <div className="iconBox">
                    {React.createElement(item.images, { size: 30 })}
                  </div>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {language === "hindi" && (
          <div className="row ">
            {ServiceData2.map((item: any) => (
              <div data-aos="zoom-in" className="col-lg-3 col-md-4 col-sm-6">
                <div className="servicedetails">
                  <div className="iconBox">
                    {React.createElement(item.images, { size: 30 })}
                  </div>
                  <h6>{item?.title}</h6>
                  <p>{item?.discription}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
