// import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

// function SkillsBar({ skill, value, isScrolled }) {
//   return (
//     <div style={{ width: "95%" }}>
//       <p className="lead mb-1 mt-2">{skill}</p>
//       <ProgressBar
//         className={!isScrolled ? "progress" : " progress-bar-animation"}
//         now={value}
//       />
//     </div>
//   );
// }

// export default SkillsBar;

// import React from "react";
// import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa"; // Add other icons as needed

// const iconMap = {
//   "ReactJS": <FaReact />,
//   "HTML": <FaHtml5 />,
//   "CSS": <FaCss3Alt />
// };

// function SkillIcon({ skill }) {
//   return (
//     <div className="skill-icon">
//       {iconMap[skill] || <span>{skill}</span>} {/* Fallback to text */}
//       <p className="skill-name">{skill}</p>
//     </div>
//   );
// }

// export default SkillIcon;