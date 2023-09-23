import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Sylla',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Siaka',
  },

  {
    id: 3,
    title: 'Age : ',
    description: 'Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Ivoirien',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Abidjan',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+225 07 10 39 69 67',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'syllasiaka227@gmail.com',
  },

  {
    id: 9,
    title: 'WhatsApp : ',
    description: '+225 05 44 84 92 56',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English(intermediate)',
  },
];

export const stats = [
  {
    id: 1,
    no: '03+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '13+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '17+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '03+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'React and Node Developer <span> Cool Lion Finance </span>',
    desc: 'As an experienced developer specializing in React and Node.js technologies, I had the opportunity to make my valuable contribution within the Cool Lion Finance company.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022',
    title: 'React and Node Developer <span> Cool Lion Energies </span>',
    desc: 'I am a React and Node developer who worked at Cool Lion Energies, showcasing a high level of expertise in creating modern and high-performance web applications, highlighting my skills in React.js and Node.js to contribute to the success of any company.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021',
    title: 'React and Node Developer <span> ImmoKori </span>',
    desc: 'In summary, I am an experienced professional in React and Node.js who has made a significant contribution to the success of Immokori by developing high-quality web applications. My technical expertise, creativity, and passion for web development make me a valuable asset to any company.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Certificate in react.js <span> IIPEA Abidjan </span>',
    desc: 'As a certified React and Node.js developer, I possess strong expertise in creating modern and high-performance web applications. My educational background has allowed me to master React.js, one of the most popular JavaScript framework for building responsive and dynamic user interfaces.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Bachelor Degree <span> IIPEA Abidjan </span>',
    desc: 'Having achieved academic excellence and the practical expertise required to design and develop high-quality software solutions, I have become a valuable asset to any development team.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'high school diploma <span> Montherlant School </span>',
    desc: "I successfully obtained my bachelor's degree from the prestigious Lycée Montherlant in Abidjan, with an impressive academic record and a constant commitment to excellence.",
  },
];

export const skills = [
  {
    id: 1,
    title: 'React',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Node',
    percentage: '90',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '90',
  },

  {
    id: 4,
    title: 'TypeScript',
    percentage: '90',
  },

  {
    id: 5,
    title: 'HTML/CSS',
    percentage: '90',
  },

  {
    id: 6,
    title: 'Git',
    percentage: '90',
  },

  {
    id: 7,
    title: 'XSS/CSRF',
    percentage: '90',
  },

  {
    id: 8,
    title: 'MySQl/MongoDB',
    percentage: '90',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Cool Lion Energies',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React and Node',
      },
      {
        icon: <FiExternalLink />,
        title: '<a href="https://application--presence.pages.dev/" target="blank"> Preview : <a/>',
        desc: '<a href="https://application--presence.pages.dev/" target="blank">application--presence<a/>',
      },
    ],
  },

  {
    id: 1,
    img: Work2,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Cool Lion Finance',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML/CSS/JS',
      },
      {
        icon: <FiExternalLink />,
        title: '<a href="https://coollionfi.com/" target="blank"> Preview : <a/>',
        desc: '<a href="https://coollionfi.com/" target="blank">www.coollionfi.com<a/>',
      },
    ],
  },

  {
    id: 1,
    img: Work3,
    title: 'Wordpress',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Wordpress',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Immokori',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Wordpress',
      },
      {
        icon: <FiExternalLink />,
        title: '<a href="https://immokori.com/" target="blank"> Preview : <a/>',
        desc: '<a href="https://immokori.com/" target="blank">www.immokori.com<a/>',
      },
    ],
  },

  {
    id: 1,
    img: Work4,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Cool Lion Energies',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React and Node',
      },
      {
        icon: <FiExternalLink />,
        title: '<a href="https://coollionenergies.com/" target="blank"> Preview : <a/>',
        desc: '<a href="https://coollionenergies.com/" target="blank">coollionenergies.com<a/>',
      },
    ],
  },

    {
    id: 1,
    img: Work5,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Blue Bag',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React and Node',
      },
      {
        icon: <FiExternalLink />,
        title: '<a href="https://bluebaggrants.com/" target="blank"> Preview : <a/>',
        desc: '<a href="https://bluebaggrants.com/" target="blank">www.bluebag.com<a/>',
      },
    ],
  },

  {
    id: 1,
    img: Work6,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Africa Web3 Labs',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React and Node',
      },
      {
        icon: <FiExternalLink />,
        title: '<a href="https://www.africaweb3labs.com/" target="blank"> Preview : <a/>',
        desc: '<a href="https://www.africaweb3labs.com/" target="blank">africaweb3labs.com<a/>',
      },
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
