import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage";
import AgreementPage from "./pages/AgreementPage";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path='/agreement' element={<AgreementPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
