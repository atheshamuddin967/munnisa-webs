import React from "react";
import { ServiceData } from "../../Data/ServicesData";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="headings ">
          <h2>Services we provide.</h2>
        </div>
        <div className="row ">
          {ServiceData.map((item: any) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
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
      </div>
    </div>
  );
}

export default Services;
