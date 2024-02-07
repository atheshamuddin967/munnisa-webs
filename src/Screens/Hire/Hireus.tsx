import { useState } from "react";
import { Data } from "../../Data/DummyData";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Hireus() {
  const [startDate, setStartDate] = useState(new Date());

  function handleDateChange(date: Date | null): void {
    if (date) {
      // Handle the selected date as needed
      console.log("Selected date:", date);
      setStartDate(date);
    }
  }

  return (
    <div className="hireus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="hireHeadings">
              <h4>Create a new query</h4>
              <h6>Please fill in the details below.</h6>
            </div>
          </div>
        </div>

        <div className="formsLayout">
          <div className="shad"></div>
          <div className="formdata">
            <div className="inpbox">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="inpbox">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="Email" />
            </div>
            <div className="inpbox">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="inpbox">
              <label htmlFor="title">Type</label>
              <select name="" id="">
                <option value="" disabled>
                  Select type
                </option>
                {Data.map((item: any) => (
                  <option value={item.tite}>{item?.title}</option>
                ))}
              </select>
            </div>
            <div className="inpbox2">
              <label htmlFor="">Select date</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => handleDateChange(date)}
                showTimeSelect
                dateFormat="Pp"
                className="calen"
                wrapperClassName="datepicker-wrapper"
              />
            </div>
            <div className="inpbox">
              <label htmlFor="budget">Budget</label>
              <input type="text" id="budget" name="budget" />
            </div>
            <div className="inpbox">
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

export default Hireus;
