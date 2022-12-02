import { Routes, Route, NavLink } from "react-router-dom";
import Employment from "../pages2/Employment";
import Health from "../pages2/Health";
import Layoff from "../pages2/Layoff";
import ToolKit from "../pages2/Toolkits";
// reordered coderouting to match how it should be rendered
const AboutMain = () => {
  return (
    <section className="about-main-section">
      <div className="container text-dark">
        <div className="topnav">
          {/* Substituted Link for NavLink because "NavLink" carries the active class by default */}

          <NavLink to="/work/employment" className=" text-capitalize">
            Employment in Canada
          </NavLink>
          <NavLink to="/work/layoff">Layoffs</NavLink>
          <NavLink to="/work/health">Health</NavLink>
          <NavLink to="/work/toolkit">Toolkits</NavLink>
        </div>
        <Routes>
          <Route
            path="/employment"
            element={<Employment />}
          />
          <Route path="/layoff" element={<Layoff />} />
          <Route path="/health" element={<Health />} />
          <Route path="/toolkit" element={<ToolKit />} />
        </Routes>
      </div>
    </section>
  );
};

export default AboutMain;
