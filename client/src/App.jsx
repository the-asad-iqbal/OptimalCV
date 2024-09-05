import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume/:id" element={<Resume />} />
         </Routes>
      </Router>
   );
};

export default App;
