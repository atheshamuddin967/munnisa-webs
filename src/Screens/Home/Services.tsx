import React, { useEffect, useState } from "react";
import { ServiceData, ServiceData5 } from "../../Data/ServicesData";
import { ServiceData2 } from "../../Data/ServicesData";
import { ServiceData3 } from "../../Data/ServicesData";
import { ServiceData4 } from "../../Data/ServicesData";
import AOS from "aos";
import { useLanguage } from "../../context/LanguageContext";
function Services() {
  const [isDetailModal, setIsDetailModal] = useState<any>(false);
  const [serviceDetail , setServiceDetail] = useState<any>('')
  const { language } = useLanguage();
const handleViewDetail = (item: any) => {
  console.log(item)
  setServiceDetail(item)
  setIsDetailModal(true)

}
const closeModal = () => {
  setIsDetailModal(false)
}
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
              <div data-aos="zoom-in"  className=" col-lg-3 col-md-4 col-sm-6">
                <div onClick={()=>handleViewDetail(item)} style={{cursor:'pointer'}} className="servicedetails">
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
                <div onClick={()=>handleViewDetail(item)} style={{cursor:'pointer'}} className="servicedetails">
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
                <div onClick={()=>handleViewDetail(item)} style={{cursor:'pointer'}} className="servicedetails">
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
                <div onClick={()=>handleViewDetail(item)} style={{cursor:'pointer'}} className="servicedetails">
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
              <div  data-aos="zoom-in" className="col-lg-3 col-md-4 col-sm-6">
                <div onClick={()=>handleViewDetail(item)} style={{cursor:'pointer'}} className="servicedetails">
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
      {serviceDetail && 
        <div  className={`modal fade ${isDetailModal ? 'show d-flex justify-content-center align-items-center' : ''}`} tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog d-flex justify-content-center align-items-center">
        <div className="modal-content     ">
          <div className="modal-header">
            <h5 className="modal-title fs-3">{serviceDetail?.title}</h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column gap-3" style={{height:'auto', overflowY:'auto' }}>
            <h2 className="fs-5">{serviceDetail?.subTitle} </h2>
            <p className="">
              {serviceDetail?.completeDescription}
              </p>
          </div>
          
        </div>
      </div>
    </div>
      }
    </div>
  );
}

export default Services;
