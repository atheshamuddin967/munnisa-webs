import { useState } from "react";
import { Data, Data5 } from "../../Data/DummyData";
import { Data2 } from "../../Data/DummyData";
import { Data3 } from "../../Data/DummyData";
import { Data4 } from "../../Data/DummyData";
import DatePicker from "react-datepicker";
import { useLanguage } from "../../context/LanguageContext";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useApi } from "../../context/Api";

function Hireus() {
  const { language } = useLanguage();
  const { CreateRequest } = useApi();
  const [startDate, setStartDate] = useState(new Date());
  const [hireUsData, setHireUsData] = useState({
    name: "",
    email: "",
    title: "",
    type: "",
    date: startDate,
    budget: "",
    description: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Service type is required"),
    budget: Yup.string().required("Budget is required"),
    description: Yup.string().required("Description is required"),
  });

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
            {language === "arabic" && (
              <div className="hireHeadings">
                <h4>إنشاء استعلام جديد</h4>
                <h6>يرجى ملء التفاصيل أدناه.</h6>
              </div>
            )}
            {language === "bengali" && (
              <div className="hireHeadings">
                <h4>নতুন জিজ্ঞাসা তৈরি করুন</h4>
                <h6>নীচের বিশদগুলি পূরণ করুন।</h6>
              </div>
            )}
            {language === "soomali" && (
              <div className="hireHeadings">
                <h4>Sharci cusub kari</h4>
                <h6>Fadlan buuxi tafatirka hoose.</h6>
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

        <Formik
          initialValues={hireUsData}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            if (!values) {
              toast.error("Please fill in the form");
              console.log(values);
              return;
            }
            if (values) {
              toast.success("Form submitted successfully");
              setHireUsData(values);
              CreateRequest(values);
              console.log(values);

              // Clear form fields after submission
              resetForm();
            }
          }}
        >
          <Form className="formsLayout">
            <div className="shad"></div>
            <div className="formdata">
              <div className="inpbox">
                {language === "bengali" && <label htmlFor="name">নাম</label>}
                {language === "soomali" && <label htmlFor="name">Magaca</label>}
                {language == "en" && <label htmlFor="name">Name</label>}

                {language == "arabic" && <label htmlFor="name">اسم</label>}
                {language == "hindi" && <label htmlFor="name">नाम</label>}
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error  " />
              </div>
              <div className="inpbox">
                {language == "en" && <label htmlFor="email">Email</label>}
                {language == "arabic" && (
                  <label htmlFor="email">بريد إلكتروني</label>
                )}
                {language == "hindi" && <label htmlFor="email">ईमेल</label>}
                {language === "bengali" && <label htmlFor="email">ইমেইল</label>}
                {language === "soomali" && (
                  <label htmlFor="email">Iimayl</label>
                )}

                <Field type="text" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox">
                {language == "en" && <label htmlFor="title">Title</label>}
                {language == "arabic" && <label htmlFor="title">عنوان</label>}

                {language == "hindi" && <label htmlFor="title">शीर्षक</label>}
                {language === "bengali" && (
                  <label htmlFor="title">শিরোনাম</label>
                )}
                {language === "soomali" && (
                  <label htmlFor="title">Tayada</label>
                )}

                <Field type="text" id="title" name="title" />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox">
                {language == "en" && <label htmlFor="type">Service type</label>}
                {language == "arabic" && (
                  <label htmlFor="type">نوع الخدمة</label>
                )}

                {language === "bengali" && (
                  <label htmlFor="type">সেবা প্রকার</label>
                )}
                {language === "soomali" && (
                  <label htmlFor="type">Noocya Adeega</label>
                )}

                {language == "hindi" && (
                  <label htmlFor="type">सेवा का प्रकार</label>
                )}
                <Field as="select" id="type" name="type">
                  <option value="" disabled selected>
                    Select type
                  </option>
                  {language === "en" &&
                    Data.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  {language === "hindi" &&
                    Data2.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  {language === "bengali" &&
                    Data3.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  {language === "soomali" &&
                    Data4.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  {language === "arabic" &&
                    Data5.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  name="serviceType"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox2">
                {language == "en" && <label htmlFor="date">Select date</label>}
                {language == "arabic" && (
                  <label htmlFor="date">حدد تاريخ</label>
                )}
                {language === "bengali" && (
                  <label htmlFor="date">তারিখ নির্বাচন করুন</label>
                )}
                {language === "soomali" && (
                  <label htmlFor="date">Xulo taariikhda</label>
                )}

                {language == "hindi" && (
                  <label htmlFor="date">तारीख़ चयन करें</label>
                )}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date || new Date())}
                  showTimeSelect
                  dateFormat="Pp"
                  className="calen"
                  wrapperClassName="datepicker-wrapper"
                  id="date"
                  name="date"
                />
                <ErrorMessage name="date" component="div" className="error  " />
              </div>
              <div className="inpbox">
                {language === "bengali" && (
                  <label htmlFor="budget">বাজেট</label>
                )}
                {language === "soomali" && (
                  <label htmlFor="budget">Maalgelin</label>
                )}

                {language == "en" && <label htmlFor="budget">Budget</label>}
                {language == "arabic" && (
                  <label htmlFor="budget">ميزانية</label>
                )}

                {language == "hindi" && <label htmlFor="budget">बजट</label>}
                <Field type="text" id="budget" name="budget" />
                <ErrorMessage
                  name="budget"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox">
                {language == "en" && (
                  <label htmlFor="description">Description</label>
                )}
                {language == "arabic" && (
                  <label htmlFor="description">وصف</label>
                )}
                {language == "hindi" && (
                  <label htmlFor="description">विवरण</label>
                )}
                {language === "bengali" && (
                  <label htmlFor="description">বিবরণ</label>
                )}
                {language === "soomali" && (
                  <label htmlFor="description">Qeexo</label>
                )}

                <Field
                  as="textarea"
                  rows={5}
                  id="description"
                  name="description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error  "
                />
              </div>
              {language == "en" && (
                <div className="inpbox">
                  <button type="submit">Submit</button>
                </div>
              )}
              {language == "arabic" && (
                <div className="inpbox">
                  <button type="submit">يُقدِّم</button>
                </div>
              )}
              {language == "hindi" && (
                <div className="inpbox">
                  <button type="submit">प्रस्तुत करें</button>
                </div>
              )}
              {language === "bengali" && (
                <div className="inpbox">
                  <button type="submit">জমা দিন</button>
                </div>
              )}
              {language === "soomali" && (
                <div className="inpbox">
                  <button type="submit">Ku qor</button>
                </div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Hireus;
