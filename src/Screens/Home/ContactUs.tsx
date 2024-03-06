import { useLanguage } from "../../context/LanguageContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function ContactUs() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    number: "",
    description: "",
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      if (!values) {
        throw new Error("Please fill in the form");
      }

      toast.success("Form submitted successfully");
      console.log(values);
      setFormData(values);

      await resetForm();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string()
      .matches(/^\d+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(12, "Phone number must not exceed 12 digits")
      .required("Phone number is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="contact" >
      <div className="container">
        <div id="contact" className="headings text-center">
          {language === "en" && <h2>Contact Us</h2>}
          {language === "arabic" && <h2>اتصل بنا</h2>}
          {language === "hindi" && <h2>हमारी टीम</h2>}
          {language === "bengali" && <h2>যোগাযোগ করুন</h2>}
          {language === "soomali" && <h2>Nala soo xiriir</h2>}
        </div>
        <Formik
          initialValues={formData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="formsLayout">
            <div className="shad"></div>
            <div className="formdata">
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && <label htmlFor="name">Name</label>}

                {language === "arabic" && <label htmlFor="name">اسم</label>}
                {language === "hindi" && <label htmlFor="name">नाम</label>}
                {language === "bengali" && <label htmlFor="name">নাম</label>}
                {language === "soomali" && <label htmlFor="name">Magaca</label>}

                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && <label htmlFor="email">Email</label>}
                {language === "arabic" && (
                  <label htmlFor="email">بريد إلكتروني</label>
                )}

                {language === "hindi" && <label htmlFor="email">ईमेल</label>}
                {language === "bengali" && <label htmlFor="email">ইমেইল</label>}
                {language === "soomali" && (
                  <label htmlFor="email">Iimayl</label>
                )}

                <Field type="text" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div data-aos="zoom-in" className="inpbox">
                {language === "arabic" && (
                  <label htmlFor="number">رقم التليفون</label>
                )}
                {language === "en" && <label htmlFor="number">Number</label>}
                {language === "hindi" && <label htmlFor="number">संख्या</label>}
                {language === "bengali" && (
                  <label htmlFor="number">নম্বর</label>
                )}
                {language === "soomali" && (
                  <label htmlFor="number">Nambarka</label>
                )}

                <Field type="text" id="number" name="number" />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && (
                  <label htmlFor="description">Description</label>
                )}
                {language === "arabic" && (
                  <label htmlFor="description">وصف</label>
                )}
                {language === "hindi" && (
                  <label htmlFor="description">विवरण</label>
                )}
                {language === "bengali" && (
                  <label htmlFor="description">বর্ণনা</label>
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
                  className="error text-danger"
                />
              </div>
              <div className="inpbox">
                {language === "en" && <button type="submit">submit</button>}
                {language === "arabic" && (
                  <button type="submit">يُقدِّم</button>
                )}
                {language === "hindi" && (
                  <button type="submit">प्रस्तुत करें</button>
                )}
                {language === "bengali" && (
                  <button type="submit">জমা দিন</button>
                )}
                {language === "soomali" && (
                  <button type="submit">Ku qor</button>
                )}
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
