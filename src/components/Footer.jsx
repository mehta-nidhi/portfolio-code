import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p className="font-weight-bold">made with <span class="heart">💙</span> by <strong>NIDHI MEHTA</strong></p>
      </Container>
    </footer>
  );
};

export default Footer;
