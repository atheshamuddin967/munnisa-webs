import "../src/Styles/Global.scss";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Screens/Home/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Hireus from "./Screens/Hire/Hireus";
import SignIn from "./Screens/Login/SignIn";
import SignUp from "./Screens/Login/SignUp";
import { useEffect } from "react";
import Forget from "./Screens/Login/Forge";
import ChangePassword from "./Screens/Login/ChangePassword";
import { useApi } from "./context/Api";
import CovidScreen from "./Screens/Covid/CovidScreen";
import { useLanguage } from "./context/LanguageContext";
function App() {
  const { language } = useLanguage();
  const { signinUser } = useApi();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if user credentials are present in local storage
    if (storedEmail && storedPassword) {
      // Attempt to sign in the user automatically
      signinUser({ email: storedEmail, password: storedPassword })
        .then((userData: any) => {
          // If successful, you can perform any necessary actions
          console.log("User signed in automatically:", userData);
        })
        .catch((error: any) => {
          // Handle any errors during automatic sign-in
          console.error("Automatic sign-in failed:", error);
        });
    }
  }, []);

  return (
    <div className={`box ${language === "arabic" ? "rights" : ""}`}>
      <div className="sticky">
        <Navbar />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Hire"} element={<Hireus />} />
        <Route path={"/Signin"} element={<SignIn />} />
        <Route path={"/Signup"} element={<SignUp />} />
        <Route path={"/forget"} element={<Forget />} />
        <Route path={"/Covid"} element={<CovidScreen />} />

        <Route
          path={`/changePassword/:id/:token`}
          element={<ChangePassword />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
