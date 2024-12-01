// import React from "react";
// import Col from "react-bootstrap/Col";
// import SkillsBar from "./SkillsBar";

// function SkillsSection({ skills, isScrolled }) {
//   return (
//     <>
//       {skills.map((skill, index) => (
//         <SkillsBar
//           key={`${skill}-${index}`}
//           skill={skill.name}
//           value={skill.value}
//           isScrolled={isScrolled}
//         />
//       ))}
//     </>
//   );
// }

// function SkillsTab({ skills, isScrolled }) {
//   return (
//     <>
//       <Col xs={12} md={6}>
//         <SkillsSection
//           skills={skills.slice(0, Math.floor(skills.length / 2))}
//           isScrolled={isScrolled}
//         />
//       </Col>
//       <Col xs={12} md={6}>
//         <SkillsSection
//           skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
//           isScrolled={isScrolled}
//         />
//       </Col>
//     </>
//   );
// }

// export default SkillsTab;

// import React from "react";
// import SkillIcon from "./SkillIcon";

// function SkillsTab({ skills }) {
//   return (
//     <div className="skills-grid">
//       {skills.map((skill, index) => (
//         <SkillIcon key={`${skill.name}-${index}`} skill={skill.name} />
//       ))}
//     </div>
//   );
// }

// export default SkillsTab;

import React from "react";
import SkillIcon from "./SkillIcon";

function SkillsTab({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => {
        console.log(`Rendering skill: ${skill.name} with icon: ${skill.icon}`);
        return (
          <SkillIcon
            key={`${skill.name}-${index}`}
            skill={skill.name}
            icon={skill.icon}
          />
        );
      })}
    </div>
  );
}

export default SkillsTab;
