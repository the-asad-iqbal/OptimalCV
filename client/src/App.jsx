import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
   return (
      <Router>
         <NavBar />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </Router>
   );
};

export default App;
