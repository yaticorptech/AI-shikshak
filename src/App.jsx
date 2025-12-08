import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import AgreementPage from "./pages/AgreementPage";
import Navbar from "./Components/Global/Navbar";
import Footer from "./Components/Global/Footer";
import PartnerDashboard from "./pages/PartnerDashboard";
import Partnerdashboardlogin from "./pages/logins/Partnerdashboardlogin";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/dashboard" element={<PartnerDashboard/>}/>
        <Route path="/partnerlogin" element={<Partnerdashboardlogin/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
