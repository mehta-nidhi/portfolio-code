import React from 'react';
import { Col } from "react-bootstrap";
import './app.css';

const CaseStudyCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-5 text-center">
        <div className="portfolio-img">
          {/* Wrap the image with a clickable link */}
          <a href={data.redirectUrl} target="_blank" rel="noopener noreferrer">
            <img className="bg-white mb-3" src={data.portfolioImg} alt="" />
          </a>
        </div>
        <p className="lead">
          <strong style={{ fontSize: "1.1em" }}>{data.portfolioTxt}</strong>
          <br />
          {/* <span className="tag-label">{data.tag1}</span>
          <span className="tag-label">{data.tag2}</span>
          <span className="tag-label">{data.tag3}</span> */}
        </p>
      </div>
    </Col>
  );
}

export default CaseStudyCard;
