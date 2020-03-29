import React from "react";
import RequestTitle from "../RequestTitle";
import DetailsGrid from "../DetailsGrid";
import RequestNote from "../RequestNote";
import Actions from "../Actions";
import Approver from "../Approver";
import { filterApprover } from "../../utils";
import "./index.css";

const RequestBox = ({ request }) => {
  const { service, id, approvers } = request;
  return (
    <div className="request-box">
      <RequestTitle service={service} reqId={id}></RequestTitle>
      <div className="row">
        <div className="request-details border-right">
          <DetailsGrid details={request}></DetailsGrid>
          <RequestNote service={request.service}></RequestNote>
          <Actions></Actions>
        </div>
        <div className="request-approvers">
          <div className="approvers">
            <h4 className="small-font grey-text">Approved</h4>
            {filterApprover(approvers, true).map((usr, index) => (
              <Approver key={index} approver={usr} approved={true}></Approver>
            ))}
          </div>
          <hr className="divider" />
          <div className="approvers">
            <h4 className="small-font grey-text">Pending</h4>
            {filterApprover(approvers, false).map((usr, index) => (
              <Approver key={index} approver={usr} approved={false}></Approver>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBox;
