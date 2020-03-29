import React from "react";
import { filterCurrency } from "../../utils";
import fileIcon from "./file.svg";
import "./index.css";

const DetailsGrid = ({ details }) => {
  const request = details;
  return (
    <div className="detail-box">
      <div className="detail-row row">
        <div className="detail-title grey-text col-title">
          <span>Requested by</span>
        </div>
        <div className="detail-desc col-desc">
          <img
            className="profile-pic"
            src={request.requested_by.profile_picture}
            alt="Requested By"
          />
          <span>
            {`${request.requested_by.first_name} ${request.requested_by.last_name}`}
          </span>
        </div>
      </div>
      <div className="detail-row row">
        <div className="detail-title grey-text col-title">
          <span>Cost</span>
        </div>
        <div className="detail-desc col-desc">
          <span>{filterCurrency(request.cost)}</span>
        </div>
      </div>
      <div className="two-col row">
        <div className="detail-title grey-text col-title">
          <span>Renewal Frequency</span>
        </div>
        <div className="detail-desc col-desc-sm border-right">
          <span>
            {request.renewal_frequency_in_months}
            {` ${request.renewal_frequency_in_months > 1 ? "months" : "month"}`}
          </span>
        </div>
        <div className="detail-title grey-text col-title">
          <span>Annual Cost</span>
        </div>
        <div className="detail-desc col-desc-sm">
          <span>
            {filterCurrency(request.renewal_frequency_in_months * request.cost)}
          </span>
        </div>
      </div>
      <div className="detail-row row">
        <div className="detail-title grey-text col-title">
          <span>Expense Account</span>
        </div>
        <div className="detail-desc col-desc">
          <span>{request.expense_account}</span>
        </div>
      </div>
      <div className="detail-row row">
        <div className="detail-title grey-text col-title">
          <span>File</span>
        </div>
        <div className="detail-desc col-desc">
          {request.files.map((file, index) => (
            <a
              key={index}
              className="filename"
              href={file}
              rel="noreferrer noopener"
              target="_blank"
            >
              <img className="file-icon" src={fileIcon} alt="file" />
              {file.split("/").pop()}
            </a>
          ))}
        </div>
      </div>
      <div className="detail-row row">
        <div className="detail-title grey-text col-title block-sm">
          <span>Description</span>
        </div>
        <div className="detail-desc col-desc block-sm">
          <span>{request.description}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsGrid;
