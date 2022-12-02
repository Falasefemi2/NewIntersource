import { Routes, Route, NavLink } from "react-router-dom";
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
            element={<>Add your components test 111</>}
          />
          <Route path="/layoff" element={<>Add your components test 222</>} />
          <Route path="/health" element={<>Add your components test 333</>} />
          <Route path="/toolkit" element={<>Add your components test 444</>} />
        </Routes>
      </div>
    </section>
  );
};

export default AboutMain;
