import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" md="6" sm="12"> {/* Adjust column size to fit 2 cards in a row */}
      <div className="pb-5 text-center">
        <img className="bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          <strong>{data.company}</strong>
          <br />
          <span style={{ fontSize: "0.9em" }}>{data.role}</span>
          <br />
          <span style={{ fontSize: "0.9em" }}>{data.date}</span>
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;