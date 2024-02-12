import { Link, useNavigate } from "react-router-dom";
import Images from "../../images/Images";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useApi } from "../../context/Api";
function SignUp() {
  const { signupUser } = useApi();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [signUpData, setSignUpData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   console.log(signUpData);
  // }, [signUpData]);

  const onSubmit = (values: any, { resetForm }: any): void => {
    if (!values) {
      toast.error("Please fill in the form", { position: "bottom-right" });
      return;
    }
    if (values) {
      setSignUpData(values);
      console.log(values);
      signupUser(values);

      toast.success("Signup Successfully", { position: "bottom-right" });
      navigate("/Signin");
      resetForm();
    }

    // Clear form fields after submission
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(12, "Phone number must not exceed 12 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="login">
      <div className="container">
        <div className="row rows">
          <div className="col-sm-6">
            <div className="logininpt">
              <img src={Images.Logo} alt="Logo" />
              <Formik
                initialValues={signUpData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="inpbox3">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error "
                  />
                  <div className="inpbox3">
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone #"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error "
                  />
                  <div className="inpbox3">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error "
                  />
                  <div className="inpbox3">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    {showPassword ? (
                      <FaRegEye onClick={togglePasswordVisibility} />
                    ) : (
                      <FaRegEyeSlash onClick={togglePasswordVisibility} />
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error text-danger"
                  />
                  <div className="singBtn">
                    <button type="submit">SignUp</button>
                  </div>
                  <p>
                    Already have an account? <Link to="/Signin">SignIn</Link>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="loginImg">
              <img src={Images.Login} alt="LOgin" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
