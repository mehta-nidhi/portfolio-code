// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce,#82c0cc,#2e86ab,#1ad7c0,#70c1b3",
  firstName: "NIDHI",
  middleName: "",
  lastName: "MEHTA",
  message: " Designing the future, one pixel at a time! ✏️",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nidhimehta4693/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/treasureandmr.bear/",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@nidhisheryl",
    },
    {
      image: "fa-github",
      url: "https://github.com/mehta-nidhi",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: <strong>About Me</strong>,
  imageLink: require("../editable-stuff/nidhimehta.jpg"),
  imageSize: 375,
  message:(
    <>
      <h4 style={{ fontSize: "1.5em" }}>Hi, I am Nidhi Mehta</h4>
      <br></br>
      <h5 style={{ fontSize: "1.0em" }}>UX/UI Product Designer based in Germany.</h5>
      <br></br>
      <p>
        My journey started in web design and evolved through digital marketing and talent acquisition, ultimately leading me to UX/UI design—my true passion. Currently, I’m honing my skills at the UX/UI Product Design Bootcamp, mastering Figma, prototyping, and user research to bring ideas to life.
      </p>
      <p>
      I specialize in tools like Figma, Adobe Creative Cloud, and have foundational knowledge of HTML and CSS, enabling effective communication with developers for design accuracy. I am committed to creating seamless, user-friendly experiences and am eager to join a dynamic team to contribute and make a meaningful impact.
      </p>
    </>
  ),
  // resume: "https://drive.google.com/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
// const repos = {
//   show: true,
//   heading: <strong>Projects</strong>,
//   gitHubUsername: "mehta-nidhi", //i.e."johnDoe12Gh"
//   reposLength: 6,
//   specificRepos: [],
// };

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/nidhimehta.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/nidhimehta.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: <strong>Skills</strong>,
  hardSkills: [
    { name: "Figma", icon: "FaFigma" },
    { name: "Adobe XD", icon: "SiAdobexd" },
    { name: "Indesign", icon: "SiAdobeindesign" },
    { name: "Illustrator", icon: "SiAdobeillustrator" },
    { name: "Photoshop", icon: "SiAdobephotoshop" },
    { name: "HTML", icon: "FaHtml5" },
    { name: "CSS", icon: "FaCss3" },
  ],
  otherSkills: [],
  softSkills: [],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: <strong>Get In Touch</strong>,
  message:
    "I'm currently looking for UX/UI or any designing opportunities! If you know of any positions available, have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nidhisheryl@gmail.com",
};

const experiences = {
  show: true,
  heading: <strong>Experience</strong>,
  data: [
    // {
    //   role: 'UX/UI Designer',
    //   company: 'August Infotech',
    //   companylogo: require('../assets/img/august.png'),
    //   date: 'November 2023 – Present',
    // },
    {
      role: 'UX/UI Designer',
      company: 'eDataMine',
      companylogo: require('../assets/img/edatamine.png'),
      date: 'May 2020 – December 2022',
    },
    {
      role: 'Talent Acquisition and Digital Marketing Specialist',
      company: 'TalentRupt Inc., India',
      companylogo: require('../assets/img/talentrupt.jpeg'),
      date: 'December 2016 – November 2019',
    },
    {
      role: 'Junior Web Designer',
      company: 'Quantum Technolabs Pvt. Ltd.',
      companylogo: require('../assets/img/quantum.png'),
      date: 'May 2015 – October 2016',
    },
    {
      role: 'Web Design Intern',
      company: 'Jazz Branding, India',
      companylogo: require('../assets/img/jazz.jpg'),
      date: 'October 2014 – March 2015',
    },
  ]
}

// const portfolios = {
//   show: true,
//   heading: <strong>Projects</strong>,
//   data: [
//     {
//       // text: 'Responsive E-Commerce Website',
//       portfolioTxt: 'E-Commerce Website',
//       portfolioImg: require('../assets/img/Ecommerce.png'),
//       tag1: "Ecommerce 🛍️",
//       tag2: "Rebranding 🎀",
//       tag3: "Website 🌐"
//     },
//     {
//       // text: '',
//       portfolioTxt: 'Restaurant Logo Design',
//       portfolioImg: require('../assets/img/logo.jpg'),
//       tag1: "Logo Design 🔖",
//       tag2: "Food 🍛",
//       tag3: "Restaurant 🏨"
//     },
//     {
//       // text: '',
//       portfolioTxt: 'Android App Design',
//       portfolioImg: require('../assets/img/Android app.jpg'),
//       tag1: "Android 🤖",
//       tag2: "Mobile App 📱",
//       tag3: "Research 💬 "
//     },
//     {
//       // text: '',
//       portfolioTxt: 'Mobile App Icon',
//       portfolioImg: require('../assets/img/icon.jpg'),
//       tag1: "Icon Design ❄️",
//       tag2: "Apple iOs 🍏",
//       tag3: "Google Android 🤖"
//     },
//     {
//       // text: '',
//       portfolioTxt: 'Doodle Art',
//       portfolioImg: require('../assets/img/doodle.jpg'),
//       tag1:"Cartoons 🐘",
//       tag2:"Calender 📆",
//       tag3:"Comics 📒"
//     },
//     {
//       // text: 'Web Design Intern',
//       portfolioTxt: 'Fitness IOS App Wireframe',
//       portfolioImg: require('../assets/img/ios.jpg'),
//       tag1: "Fitness 🚴",
//       tag2: "Add Feature 💖",
//       tag3: "Mobile App 📱"
//     },
//   ]
// }

const casestudies = {
  show: true,
  heading: <strong>Project Case Studies</strong>,  // Updated heading
  data: [
    {
      portfolioTxt: 'Accessibility Dating App',
      portfolioImg: require('../assets/img/ah.jpg'),
      // tag1: "Ecommerce 🛍️",
      // tag2: "Rebranding 🎀",
      // tag3: "Website 🌐",
      redirectUrl: "https://medium.com/@nidhisheryl/autumnhearts-accessible-dating-platform-for-singles-over-60-355f80e9e269"
    },
    {
      portfolioTxt: 'Redesigning the Flower Shop Website and App',
      portfolioImg: require('../assets/img/flowershop.jpg'),
      // tag1: "Logo Design 🔖",
      // tag2: "Food 🍛",
      // tag3: "Restaurant 🏨",
      redirectUrl: "https://medium.com/@nidhisheryl/petals-and-pixels-redesigning-holland-blumen-a-modern-web-and-app-experience-for-flower-lovers-b3c1e680fbe0"
    },
    {
      portfolioTxt: 'Coming Soon..',
      portfolioImg: require('../assets/img/medium.png'),
      // tag1: "Android 🤖",
      // tag2: "Mobile App 📱",
      // tag3: "Research 💬",
      redirectUrl: "https://medium.com/@nidhisheryl"
    },
    // Add more case studies as needed
  ]
};
// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, skills, leadership, getInTouch, experiences, casestudies};
