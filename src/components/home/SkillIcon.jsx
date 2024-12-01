// import React from "react";
// import * as FaIcons from "react-icons/fa"; // Import all FontAwesome icons

// function SkillIcon({ skill, icon }) {
//   // Dynamically get the icon component using the icon name
//   const Icon = FaIcons[icon] || FaIcons.FaQuestionCircle; // Fallback to FaQuestionCircle if the icon is not found

//   return (
//     <div className="skill-icon">
//       <Icon /> {/* Render the dynamically imported icon */}
//       <p className="skill-name">{skill}</p>
//     </div>
//   );
// }

// export default SkillIcon;

// import React from "react";
// import * as FaIcons from "react-icons/fa"; // Import all FontAwesome icons

// function SkillIcon({ skill, icon }) {
//   // Dynamically get the icon component using the icon name
//   const Icon = FaIcons[icon];

//   // If the icon is not found, log an error and show a fallback icon
//   if (!Icon) {
//     console.error(`Icon not found: ${icon}`);
//     return (
//       <div className="skill-icon">
//         {/* <FaIcons.FaQuestionCircle />  */}
//         {/* Fallback icon */}
//         <p className="skill-name">{skill}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="skill-icon">
//       <Icon /> {/* Render the dynamically imported icon */}
//       <p className="skill-name">{skill}</p>
//     </div>
//   );
// }

// export default SkillIcon;

import React from "react";
import * as FaIcons from "react-icons/fa"; // FontAwesome icons
import * as AiIcons from "react-icons/ai"; // AntDesign icons
import * as IoIcons from "react-icons/io"; // Ionicons
import * as MdIcons from "react-icons/md"; // Material Design icons
import * as GiIcons from "react-icons/gi"; // Game Icons
import * as SiIcons from "react-icons/si"; // Simple Icons

// Combine all icon sets into one object
const allIcons = { ...FaIcons, ...AiIcons, ...IoIcons, ...MdIcons, ...GiIcons, ...SiIcons };

function SkillIcon({ skill, icon }) {
  // Dynamically get the icon component using the icon name
  const Icon = allIcons[icon];

  // If the icon is not found, log an error and show a fallback icon
  if (!Icon) {
    console.error(`Icon not found: ${icon}`);
    return (
      <div className="skill-icon">
        <p className="skill-name">{skill}</p>
      </div>
    );
  }

  return (
    <div className="skill-icon">
      <Icon /> {/* Render the dynamically imported icon */}
      <p className="skill-name">{skill}</p>
    </div>
  );
}

export default SkillIcon;