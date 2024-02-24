import { useState } from "react";
import { useApi } from "../../context/Api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
function Forget() {
  const { forgetPw } = useApi();

  const [loginData, setLoginData] = useState({
    email: "",
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const onSubmit = (values: any, { resetForm }: any) => {
    if (!values) {
      toast.error("Please fill in the form");
      return;
    }

    try {
      if (values) {
        // Call the signinUser function to authenticate the user
        forgetPw(values);
        setLoginData(values);
        // Save user credentials to local storage

        // Clear form fields after successful submission
        resetForm();
      }
    } catch (error) {
      toast.error("Invalid email. Please try again.");
      console.error(error);
    }
  };
  return (
    <div className="forgetLayout">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="forget-view">
              <div className="forgetfields">
                <h6>Confirm your Email</h6>
                <Formik
                  initialValues={loginData}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error text-danger"
                    />
                    <button>Submit</button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
