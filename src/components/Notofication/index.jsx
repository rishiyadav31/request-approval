import React from "react";
import lock from "./lock.svg";
import "./index.css";

const Notification = ({ notification }) => {
  return (
    <div className="notification-wrapper">
      <span className="notif-title orange-text">
        <img src={lock} alt="Security notification" />
        {notification.type}
      </span>
      <span className="grey-text">{notification.msg}</span>
    </div>
  );
};

export default Notification;
