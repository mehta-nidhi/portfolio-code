import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { experiences, repos, about, skills, getInTouch, portfolios } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import logo from "../editable-stuff/logo.png";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand d-flex align-items-center" href={process.env.PUBLIC_URL + "/#home"}>
        <img
          src={logo}
          height="70"
          className="d-inline-block align-top mr-3" 
          alt="NIDHI MEHTA Logo"
        />
        {/* <div className="mx-2">NIDHI MEHTA</div> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="navbar-nav" style={{ marginLeft: 'auto' }}> 
          {/* {<Nav className="navbar-nav" style={{ marginLeft: 'auto' }}></Nav>
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <strong>ABOUT</strong>
            </NavLink>
          )}

          {experiences.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#experience"}
            >
              <strong>EXPERIENCE</strong>
            </NavLink>
          )}

          {repos.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              <strong>PROJECTS</strong>
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            <strong>RESUME</strong>
          </NavLink>
          {portfolios.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#portfolio"}
            >
              <strong>PORTFOLIO</strong>
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              <strong>SKILLS</strong>
            </NavLink>
          )}

          {getInTouch.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#getInTouch"}
            >
              <strong>GET IN TOUCH</strong>
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
