// import React from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import SkillsTab from "./SkillsTab";
// import Row from "react-bootstrap/Row";
// import { Jumbotron } from "./migration";
// import { Container } from "react-bootstrap";
// import { useScrollPosition } from "../../hooks/useScrollPosition";
// import './app.css';

// const Skills = React.forwardRef(({ heading, hardSkills, otherSkills, softSkills }, ref) => {
//   const skillsTabRef = React.useRef(null);
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   //const navbarDimensions = useResizeObserver(navbarMenuRef);

//   useScrollPosition(
//     ({ prevPos, currPos }) => {
//       if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
//     },
//     [],
//     skillsTabRef
//   );
//   return (
//     <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
//       <Container className="p-5 ">
//         <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
//           {heading}
//         </h2>
//         <Tabs
//           className="skills-tabs"
//           defaultActiveKey="hard-skills"
//           id="skills-tabs"
//           fill
//         >
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="hard-skills"
//             title="UI Design Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="other-skills"
//             title="UX Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={otherSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//           <Tab
//             tabClassName="skills-tab lead"
//             eventKey="soft-skills"
//             title="Tech Skills"
//           >
//             <Row className="pt-3 px-1">
//               <SkillsTab skills={softSkills} isScrolled={isScrolled} />
//             </Row>
//           </Tab>
//         </Tabs>
//       </Container>
//     </Jumbotron>
//   );
// });

// export default Skills;

import React from "react";
import { Container, Row } from "react-bootstrap";
import { Jumbotron } from "./migration";
import SkillsTab from "./SkillsTab";
import './app.css';

const Skills = React.forwardRef(({ heading, hardSkills, otherSkills, softSkills }, ref) => {
  // Combine all skills into one array
  const allSkills = [...hardSkills, ...otherSkills, ...softSkills];

  return (
    <Jumbotron ref={ref} fluid className="bg-white m-0" id="skills">
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">
          {heading}
        </h2>

        {/* Render all skills together */}
        <Row className="pt-3 px-1">
          <SkillsTab skills={allSkills} />
        </Row>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
