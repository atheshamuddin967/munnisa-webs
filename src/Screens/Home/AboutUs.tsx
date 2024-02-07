import Images from "../../images/Images";

function AboutUs() {
  return (
    <div className="philosphy">
      <div className="container">
        <div className="headings text-center">
          <h2>About us</h2>
        </div>

        <div className="row   rows">
          <div data-aos="fade-right" className="col-sm-6">
            <img src={Images.About} alt="game" />
          </div>
          <div className="col-sm-6">
            <div data-aos="fade-left" className="Philosphy-details">
              <div className="headings">
                <h3>Our Team</h3>
              </div>
              <p>
                Munissa Kare is a private family-owned organisation that has
                developed and designed to enhance and promote independence to
                our services user in the community. We provide a quality
                domiciliary and special care services. Our organisation is
                dedicated to supporting people whatever their age, gender
                ,ethnicity, religion and level of care needed on a one to one
                basis within the sanctity of their own home environment. Our
                team is highly trained, experienced staff are commited to the
                highest level of quality service to meet the needs of each
                individual recieving our specialist support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
