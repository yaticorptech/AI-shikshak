import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import AgreementPage from "./pages/AgreementPage";
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agreement" element={<AgreementPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
