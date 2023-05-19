  
import {
  Allmart,
  Foodimg,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"projects",
    title:"Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const aboutme = " I'm a skilled Web developer Currently Studying in Vishnu Institute of Technology (VIT-B) with experience in TypeScript and JavaScript, and expertise in frameworks like React and Node.js. I'm a quick learner and collaborate closely with Other Skilled Developers to create user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

 
const experiences = [
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: javascript,
    iconBg: "#383E56",
    date: "Learning Phase",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    // company_name: "Tesla",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Learning Phase",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    // company_name: "Meta",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "Learning Phase",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Adrian Hajdin",
    designation: "CEO",
    company: "Javascript Mastery",
    image: "https://avatars.githubusercontent.com/u/24898559?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Akshay Saini",
    designation: "Founder",
    company: "Namaste JavaScript",
    image: "https://yt3.googleusercontent.com/ytc/AL5GRJXcrhueXxa0kujKj2igxeT9S0ZFbgMxaXtXtZv8QQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shradha khapra",
    designation: "Founder",
    company: "Apna College",
    image: "https://wikibiopie.com/wp-content/uploads/2022/05/Screenshot-894-1-min-288x300.jpg",
  },
];

const projects = [
  {
    name: "GoodFoods",
    description:
      " Our restaurant GoodFoods is a foodies paradise that specializes in serving delicious food made from the freshest and finest ingredients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Foodimg,
    source_code_link: "https://luffyy.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Allmart,
    source_code_link: "allmartstore.vercel.app",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];




const exploreWorlds = [
  {
    id: 'skill-1',
    imgUrl: "https://www.staffcreativa.pe/blog/wp-content/uploads/HTML5.jpg",
    title: 'HTML',
    skillImage:"https://img.icons8.com/color/256/html-5.png",
  },
  {
    id: 'skill-2',
    imgUrl: 'https://midu.dev/images/wallpapers/fondo-react-horizontal-4k.png',
    title: 'React',
    skillImage:"https://img.icons8.com/color/256/react-native.png",

  },
  {
    id: 'skill-3',
    imgUrl: 'https://www.codespot.org/assets/css.jpg',
    title: 'CSS',
    skillImage:"https://img.icons8.com/color/256/css3.png",

  },
  {
    id: 'skill-4',
    imgUrl: 'https://wallpaperbat.com/img/156532-javascript-minimalism-wallpaper-hd-desktop-and-mobile-background.jpg',
    title: 'JavaScript',
    skillImage:"https://img.icons8.com/color/256/javascript.png",

  },
  {
    id: 'skill-5',
    imgUrl: 'http://allvectorlogo.com/img/2016/11/java-logo.png',
    title: 'Java',
    skillImage:"https://img.icons8.com/color/256/java-coffee-cup-logo.png",

  },
   
];




export { services,   experiences, testimonials, projects ,exploreWorlds };
