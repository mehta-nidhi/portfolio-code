// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce,#82c0cc,#2e86ab,#1ad7c0,#70c1b3",
  firstName: "Nidhi",
  middleName: "",
  lastName: "Mehta",
  message: " Designing the future, one pixel at a time! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/mehta-nidhi",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nidhi.thakker.37",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/treasureandmr.bear/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nidhimehta4693/",
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
      <h5 style={{ fontSize: "1.0em" }}>UX/UI Designer based in Siegen, Germany.</h5>
      <br></br>
      <p>
        With a career journey spanning UI/UX design, web development, and recruitment, I bring a unique blend of analytical precision and creative innovation. My passion lies in crafting seamless digital experiences that captivate audiences and enhance user engagement.
      </p>
      <p>
        Driven by a commitment to excellence, I excel in blending creativity with technical proficiency. Specializing in HTML5, CSS3, and tools like Figma and Adobe Creative Cloud, I design visually stunning and responsive websites. My expertise extends to SEO techniques, ensuring user-friendly designs that elevate digital landscapes.
      </p>
    </>
  ),
  resume: "https://drive.google.com/file/d/1B-jlaCHaC8adYo3FANw-8vKwFHS2eMMo/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: <strong>Projects</strong>,
  gitHubUsername: "mehta-nidhi", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

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
    { name: "HTML / HTML5", value: 90 },
    { name: "CSS, CSS3, SASS, SCSS", value: 90 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 70 },
    { name: "Bootstrap", value: 70 },
    { name: "XML", value: 65 },
  ],
  otherSkills: [
    { name: "Adobe Creative Cloud", value: 90 },
    { name: "Adobe XD", value: 80 },
    { name: "Figma", value: 90 },
    { name: "Sketch", value: 70 },
    { name: "Procreate", value: 90 },
    { name: "CorelDRAW", value: 60 },
  ],
  softSkills: [
    { name: "VS Code", value: 95 },
    { name: "Git", value: 90 },
    { name: "Github / Bitbucket", value: 90 },
    { name: "CI / CD", value: 60 },
    { name: "Google Ads and Analytics", value: 60 },
    { name: "SEO / SEA", value: 60 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: <strong>Get In Touch</strong>,
  message:
    "I'm currently looking for full-time UX/UI or Graphics designing opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nidhisheryl@gmail.com",
};

const experiences = {
  show: true,
  heading: <strong>Experience</strong>,
  data: [
    {
      role: 'UI/UX Designer',
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
      date: 'December 2016 – November 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
