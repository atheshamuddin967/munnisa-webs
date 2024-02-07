import { useState } from "react";
import { Data } from "../../Data/DummyData";
import { Data2 } from "../../Data/DummyData";
import DatePicker from "react-datepicker";
import { useLanguage } from "../../context/LanguageContext";
import "react-datepicker/dist/react-datepicker.css";

function Hireus() {
  const { language } = useLanguage();
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
            {language === "en" && (
              <div className="hireHeadings">
                <h4>Create a new query</h4>
                <h6>Please fill in the details below.</h6>
              </div>
            )}

            {language == "hindi" && (
              <div className="hireHeadings">
                <h4>नया प्रश्न बनाएं</h4>
                <h6>कृपया नीचे विवरण भरें।</h6>
              </div>
            )}
          </div>
        </div>

        <div className="formsLayout">
          <div className="shad"></div>
          <div className="formdata">
            <div className="inpbox">
              {" "}
              {language == "en" && <label htmlFor="name">Name</label>}
              {language == "hindi" && <label htmlFor="name">नाम</label>}
              <input type="text" id="name" name="name" />
            </div>
            <div className="inpbox">
              {language == "en" && <label htmlFor="email">Email</label>}
              {language == "hindi" && <label htmlFor="email">ईमेल</label>}
              <input type="text" id="email" name="Email" />
            </div>
            <div className="inpbox">
              {language == "en" && <label htmlFor="title">Title</label>}
              {language == "hindi" && <label htmlFor="title">शीर्षक</label>}
              <input type="text" id="title" name="title" />
            </div>
            <div className="inpbox">
              {language == "en" && <label htmlFor="title"> Service type</label>}
              {language == "hindi" && (
                <label htmlFor="title"> सेवा का प्रकार</label>
              )}
              {language == "en" && (
                <select name="" id="">
                  <option value="select type" disabled selected>
                    Select type
                  </option>
                  {Data.map((item: any) => (
                    <option value={item.tite}>{item?.title}</option>
                  ))}
                </select>
              )}
              {language == "hindi" && (
                <select name="" id="">
                  <option value="select type" disabled selected>
                    प्रकार चुनें
                  </option>
                  {Data2.map((item: any) => (
                    <option value={item.tite}>{item?.title}</option>
                  ))}
                </select>
              )}
            </div>
            <div className="inpbox2">
              {language == "en" && <label htmlFor="">Select date</label>}
              {language == "hindi" && <label htmlFor="">तारीख़ चयन करें</label>}
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
              {language == "en" && <label htmlFor="budget">Budget</label>}
              {language == "hindi" && <label htmlFor="budget">बजट</label>}
              <input type="text" id="budget" name="budget" />
            </div>
            <div className="inpbox">
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

export default Hireus;
