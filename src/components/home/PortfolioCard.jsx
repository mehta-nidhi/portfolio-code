import React from 'react';
import {
  Col,
} from "react-bootstrap";
import './app.css';

const PortfolioCard
 = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
      <div className="portfolio-img">
          <img className="bg-white mb-3" src={data.portfolioImg} alt="" />
        </div>
        <p className="lead">
          <strong style={{ fontSize: "1.3em" }}>{data.portfolioTxt}</strong>
          <br />
          <span style={{ fontSize: "0.9em" }}>{data.text}</span> {/* Adjust font size here */}
          <br />
          <span className="tag-label">{data.tag1}</span><span className="tag-label">{data.tag2}</span><span className="tag-label">{data.tag3}</span> {/* Adjust font size here */}
        </p>
      </div>
    </Col>
  );
}

export default PortfolioCard;
