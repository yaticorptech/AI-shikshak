import React from "react";
import { useLocation } from "react-router-dom";

const AgreementPage = () => {
  const loc = useLocation();
  const partner = loc.state;
  return (
    <div>
      <p>{partner.Name}</p>
    </div>
  );
};

export default AgreementPage;
