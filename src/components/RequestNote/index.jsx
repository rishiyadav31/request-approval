import React from "react";
import "./index.css";

const RequestNote = ({ service }) => {
  return (
    <div className="request-note small-font">
      <p className="red-text">
        {`Your company is already paying for ${service.name} on a recurring
        basis.`}
      </p>
      <span className="grey-text">(1 instance owned by John Smith)</span>
    </div>
  );
};

export default RequestNote;
