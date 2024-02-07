function ContactUs() {
  return (
    <div className="contact">
      <div className="container">
        <div className="headings text-center">
          <h2>Contact Us</h2>
        </div>
        <div className="formsLayout">
          <div className="shad"></div>
          <div className="formdata">
            <div data-aos="zoom-in" className="inpbox">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div data-aos="zoom-in" className="inpbox">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="Email" />
            </div>
            <div data-aos="zoom-in" className="inpbox">
              <label htmlFor="number">Number</label>
              <input type="text" id="number" name="number" />
            </div>
            <div data-aos="zoom-in" className="inpbox">
              <label htmlFor="description">Description</label>
              <textarea rows={5} id="description" name="description" />
            </div>
            <div className="inpbox">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
