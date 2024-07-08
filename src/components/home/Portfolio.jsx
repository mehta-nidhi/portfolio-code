import React from 'react';
import PortfolioCard from "./PortfolioCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Portfolio = ({ portfolios }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron fluid id="portfolio" className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {portfolios.heading}
          </h2>
          <Row className="justify-content-center">
            {
              portfolios.data.map((data, index) => {
                return <PortfolioCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Portfolio;