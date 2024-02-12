import { useParams } from "react-router-dom";
import { useApi } from "../../context/Api";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
function ChangePassword() {
  const { ChangePw, setId, setToken } = useApi();
  const { id, token } = useParams();

  useEffect(() => {
    if (id && token) {
      setId(id);
      setToken(token);
    }
  }, []);
  const [loginData, setLoginData] = useState({
    password: "",
    password_confirmation: "",
    id: id,
    token: token,
  });

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const onSubmit = (values: any, { resetForm }: any) => {
    if (!values) {
      toast.error("Please fill in the form");
      return;
    }

    try {
      if (values) {
        // Call the signinUser function to authenticate the user
        ChangePw(values);
        setLoginData(values);
        // Save user credentials to local storage

        // Clear form fields after successful submission
        resetForm();
      }
    } catch (error) {
      toast.error("Invalid credentials. Please try again.");
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
                <h6>Set your new password</h6>
                <Formik
                  initialValues={loginData}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <Field
                      type={"password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error text-danger"
                    />
                    <Field
                      type={"password"}
                      id="password_confirmation"
                      name="password_confirmation"
                      placeholder="Confirm password"
                    />
                    <ErrorMessage
                      name="password_confirmation"
                      component="div"
                      className="error text-danger"
                    />
                    <button>Set password</button>
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

export default ChangePassword;
