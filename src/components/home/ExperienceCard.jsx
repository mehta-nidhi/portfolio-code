import React from 'react';
import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          <strong>{data.company}</strong>
          <br />
          <span style={{ fontSize: "0.9em" }}>{data.role}</span> {/* Adjust font size here */}
          <br />
          <span style={{ fontSize: "0.9em" }}>{data.date}</span> {/* Adjust font size here */}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;
