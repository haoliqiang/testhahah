import React from "react";
import I05 from "pages/I05";
import I04 from "pages/I04";
import I03 from "pages/I03";
import I02 from "pages/I02";
import I01 from "pages/I01";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/i01" element={<I01 />} />
        <Route path="/i02" element={<I02 />} />
        <Route path="/i03" element={<I03 />} />
        <Route path="/i04" element={<I04 />} />
        <Route path="/i05" element={<I05 />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
