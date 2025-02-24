import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistrationForm from "./pages/RegistrationForm";
import CourseSchedule from "./pages/CourseSchedule";
import ConsultasAsignaturas from "./pages/ConsultasAsignaturas";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registro" element={<RegistrationForm />} />
        <Route path="/cronograma" element={<CourseSchedule />} />
        <Route path="/consultas" element={<ConsultasAsignaturas />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
