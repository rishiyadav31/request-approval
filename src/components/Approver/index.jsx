import React from "react";
import checkMark from "./check.svg";
import { formatDate } from "../../utils";
import "./index.css";

const Approver = ({ approver, approved }) => {
  const { profile_picture, first_name, last_name, email } = approver.approver;
  return (
    <div className="approver-wrapper">
      <div className="circle-icon small-font grey-text">{approver.seqId}</div>
      <div className="usr-img">
        <img
          className="profile-pic"
          src={profile_picture}
          alt={`${first_name} ${last_name}`}
        />
      </div>
      <div className="user-details">
        <p className="user-name">
          <span>{`${first_name} ${last_name}`}</span>
          <span className="small-font grey-text"> ({email})</span>
        </p>
        <span className="small-font grey-text">
          {approved
            ? `Approved ${formatDate(approver.last_updated_date)}`
            : `Last notified ${formatDate(approver.last_notified_time)}`}
        </span>
      </div>
      <div className={approved ? "circle check-mark" : "circle"}>
        {approved && <img src={checkMark} alt="Approved" />}
      </div>
    </div>
  );
};

export default Approver;
