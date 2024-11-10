import React from 'react';
import CaseStudyCard from "./CSCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const CaseStudies = ({ casestudies }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron fluid id="casestudies" className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {casestudies.heading}
          </h2>
          <Row className="justify-content-center">
            {
              casestudies.data.map((data, index) => {
                return <CaseStudyCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default CaseStudies;
