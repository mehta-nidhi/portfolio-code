import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p className="font-weight-bold">MADE WITH <span class="heart">💙</span> BY Nidhi Mehta</p>
      </Container>
    </footer>
  );
};

export default Footer;
