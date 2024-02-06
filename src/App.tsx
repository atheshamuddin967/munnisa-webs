import "../src/Styles/Global.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="box">
      <div className="sticky">
        <Navbar />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"Home"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
