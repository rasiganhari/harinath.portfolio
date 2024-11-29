
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import PrvigaLogo from '/public/images/experience-logos/widhuni-logo.png';
import DalvkotLogo from '/public/images/experience-logos/dalvkot.png';
import AxiomLogo from '/public/images/experience-logos/axiom.svg';
import GyritLogo from '/public/images/experience-logos/gyrit.jpg';
import We4Logo from '/public/images/experience-logos/we4.png';




import CryptoForceImage from '/public/images/projects/cryptoforce.png';
import LatimesImage from '/public/images/projects/latimes.png';
import WiduniImage from '/public/images/projects/widuni.png';



import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '../lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/harinath.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  // {
  //   icon: Github,
  //   url: 'https://github.com/MHarinath',
  // },
  // {
  //   icon: Linkedin,
  //   url: 'https://www.linkedin.com/in/harinath-m-097a7aa4/',
  // }
  // ,
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/@harinathm',
  // },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  // {
  //   label: 'Sass/Scss',
  //   logo: LogoSass,
  //   url: 'https://sass-lang.com/',
  // },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  // {
  //   label: 'Figma',
  //   logo: LogoFigma,
  //   url: 'https://www.figma.com/',
  // },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: GyritLogo,
    logoAlt: 'GyrIT logo',
    position: 'Technical Lead',
    startDate: new Date(2023, 3),
    currentlyWorkHere: true,
    summary: [
      'Led technical teams in the development and implementation of software solutions. Architected and designed complex software systems, ensuring scalability and performance. Mentored junior developers, fostering a culture of continuous learning and improvement. 1. Los Angeles Times - Advertiser Services Enhancement Project The Advertiser Services Enhancement Project aims to improve the advertiser experience at the Los Angeles Times. By streamlining processes, enhancing communication, and providing valuable insights and tools, it aims to boost advertising campaign effectiveness. These enhancements seek to strengthen the relationship with advertisers, driving revenue and customer satisfaction. Led the migration of a critical web app from Angular 5 to Angular 15, ensuring adherence to industry standards.',
      'I have proficiently developed healthcare applications using Ionic Angular and Node.js. Leveraging these technologies, I contributed to creating robust, user-friendly applications tailored to the healthcare sector. My expertise includes seamless integration of front-end and back-end functionalities, ensuring efficient and secure data management in healthcare environments.',
      'Implemented sprint-wise methodology for efficient development and timely milestones.',
      'Collaborated with UX/UI designers to integrate new designs, enhancing user experience.',
      'Conducted code reviews and provided guidance, fostering team improvement.',
      'Worked closely with QA to ensure application stability and performance.',
      'Actively participated in Agile ceremonies to drive project progress.',
      'Communicated project updates to stakeholders, aligning with business objectives.',

    ],
  },
  {
    logo: AxiomLogo,
    darkModeLogo: AxiomLogo,
    logoAlt: 'Axiomio logo',
    position: 'Software Development Engineer',
    startDate: new Date(2022, 5),
    endDate: new Date(2023, 1),
    summary: [
      'Contributed to the full software development lifecycle, from requirements gathering to deployment. Developed and maintained high-quality codebase following best practices and coding standards. Collaborated with cross-functional teams to deliver innovative software solutions. Software Developer',
    ],
  },
  {
    logo: DalvkotLogo,
    darkModeLogo: DalvkotLogo,
    logoAlt: 'Dalvkot logo',
    position: 'Software Developer',
    startDate: new Date(2021, 9),
    endDate: new Date(2022, 4),
    summary: [
      'At DALVKOT, I contributed to the development of two pivotal projects: IMS (Inventory Management System) and HMS (Hospital Management System). Leveraging PHP, Node.js, and Angular, I optimized pharmacy operations in IMS, enhancing inventory tracking and reducing operational costs. In the HMS project, I tailored solutions to hospital needs, refining patient data management and facilitating seamless departmental communication to enhance patient care and operational efficiency. - We4 Technologies Pvt Lmt, Chennai( 05.01.2021 - 0'
    ],
  },
  {
    logo: We4Logo,
    darkModeLogo: We4Logo,
    logoAlt: 'We4 logo',
    position: 'Web Developer',
    startDate: new Date(2021, 1),
    endDate: new Date(2021, 9),
    summary: [
      "As a Web Developer at WE4 Technologies PVT LTD, I specialized in crafting web applications using Laravel. My role involved designing and developing robust solutions to meet client requirements, leveraging Laravel's powerful framework to deliver efficient and scalable web applications."
    ],
  },
  {
    logo: PrvigaLogo,
    darkModeLogo: PrvigaLogo,
    logoAlt: 'Prviga logo',
    position: 'Software Developer Trainee',
    startDate: new Date(2018, 5),
    endDate: new Date(2019, 5),
    summary: [
      'Gained hands-on experience in software development methodologies and technologies. Assisted senior developers in coding, testing, and debugging software applications. Participated in training sessions and workshops to enhance technical skills and knowledge.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Los Angles Times',
    description:
      'The Advertiser Services Enhancement Project aims to improve the advertiser experience at the Los Angeles Times. By streamlining processes, enhancing communication, and providing valuableinsights and tools, it aims to boost advertising campaign effectiveness. These enhancements seek to strengthen the relationship with advertisers, driving revenue and customer satisfaction. Led the migration of a critical web app from Angular 5 to Angular 15, ensuring adherence to industry standards.',
    url: 'https://www.latimes.com',
    previewImage: LatimesImage,
    technologies: [
      'Angular',
      'Migration of Angular 5 to Angular 15,',
      'Typescript',
    ],
  },
  {
    name: 'Cryptoforce',
    description:
      'CryptoForce is a cutting-edge cryptocurrency exchange platform designed specifically for the Indian market. The platform offers diverse investment options, advanced security measures, and a user-friendly interface to cater to both novice and experienced crypto traders.',
    url: 'https://cryptoforce.in/',
    previewImage: CryptoForceImage,
    technologies: [
      'Node.js',
      'PHP',
      'Laravel',
      'MySQL'
    ],
  },
  {
    name: 'WIDUNI',
    description:
      'Widuni is a no-code/low-code platform developed by Prviga.com, designed to empower users to build and manage applications without requiring extensive technical knowledge. The project aimed to simplify workflows and enable businesses to create scalable solutions quickly and efficiently.',
    url: 'https://prviga.com',
    previewImage: WiduniImage,
    technologies: [
      'PHP',
      'React.js',
      'javascript',
      'css',
    ],
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
