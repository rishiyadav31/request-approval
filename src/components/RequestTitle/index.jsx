import React from "react";
import "./index.css";

const RequestTitle = ({ service, reqId }) => {
  const { name, logo, description } = service;
  return (
    <div className="request-title large-font" title={description}>
      <img src={logo} className="service-logo" alt={name} />
      <span>
        Request for {name} (#{reqId})
      </span>
    </div>
  );
};

export default RequestTitle;
