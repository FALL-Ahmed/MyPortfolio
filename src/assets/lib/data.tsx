import excelicon from "../../assets/icons/excelicon.svg";
import powerBiicon from "../../assets/icons/powerBiicon.svg";
import fabricIcon from "../../assets/icons/fabricIcon.svg"
import sqlicon from "../../assets/icons/sqlicon.svg";
import sparkicon from "../../assets/icons/sparkicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import hadoopicon from "../../assets/icons/Hadoopicon.svg";
import javaIcon from "../../assets/icons/javaIcon.svg";
import azureicon from "../../assets/icons/azureicon.svg";
import scalaicon from "../../assets/icons/scalaicon.svg";
import ligue1 from "../../assets/img/Ligue 1.webp";
// import bundesliga from "../../assets/img/Bundesliga.webp";
// import liga from "../../assets/img/Liga.webp";
//import mammamia1 from "../../assets/img/slide1.webp";
import mammamia2 from "../../assets/img/slide2.webp";
import fabricProject from "../../assets/img/fabricProject.png"
import profilepicture from "../img/me21.png";
import contacticon from "../../assets/icons/contact.svg";
import workicon from "../../assets/icons/work.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail, FiLink } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    fr: "Hi, C'est Ahmed",
    en: "Hi, I'm Ahmed",
  },
  subtitle: "Ingénieur Data Analyst & Business Intelligence",
  description: {
    fr: "Je suis FALL Ahmed, et les données sont ma passion. Dans chaque chiffre, je vois une opportunité cachée, et je suis ici pour les révéler. Laissez-vous inspirer par mon travail et faisons de vos données une force stratégique!",
    en: "I am FALL Ahmed, and data is my passion. In every number, I see a hidden opportunity, and I am here to uncover it. Let yourself be inspired by my work, and together, let’s turn your data into a strategic asset!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        fr: "Contactez-moi",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
       
    },
    {
      name: "Projects",
      label: {
        fr: "Mes projets",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Analytics Engineering Project",
    description:
      "Le projet consiste à extraire des données (films) de l'api de TMDB, les transformer et effectuer des analyses",
    description_EN:
      "The project consists of extracting data (movies) from the TMDB API, transforming them and performing analyzes",
    technologies: [ 
      { name: "Microsoft fabric", icon: fabricIcon },
    ],
    image: fabricProject,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Projet Mammamia",
    description:
      "Analyse Régionale des ventes d'une société locale basée à Dakar. Ceci est le deuxième rapport qui donne l'aperçu des ventes par Région",
    description_EN:
      "Regional sales analysis of a local company based in Dakar. This is the second report that provides the sales overview by Region",
    technologies: [
      { name: "Power BI", icon: powerBiicon },
      { name: "Excel", icon: excelicon },
    ],
    image: mammamia2,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Palmarès",
    description:
      "Palmarès des meilleurs clubs Français de 1900-2023",
    description_EN:
      "Top French clubs from 1900-2023",
    technologies: [
      { name: "Power BI", icon: powerBiicon },
      { name: "Excel", icon: excelicon },
    ],
    image: ligue1,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    fr: "Plus de projets sur LinkedIn",
    en: "More Projects on LinkedIn",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Data Engineering",
    skills: [
      {
        title: "SQL",
        hash: "#SQL",
        icon: sqlicon,
        color: "#61DAFB",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#023047",
      },
      {
        title: "Hapache Hadoop",
        hash: "#HapacheHadoop",
        icon: hadoopicon,
        color: "#ffee32",
      },
      {
        title: "Scala",
        hash: "#scala",
        icon: scalaicon,
        color: "#d90429",
      },
      {
        title: "Spark",
        hash: "#spark",
        icon: sparkicon,
        color: "#fb8500",
      },
      {
        title: "Java",
        hash: "#java",
        icon: javaIcon,
        color: "#fb8500",
      },
      
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Data Analysis",
    skills: [
      { 
        title: "SQL",
        hash: "#Sql",
        icon: sqlicon, 
        color: "#61DAFB" 
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#023047",
      },
      { 
        title: "Power BI", 
        hash: "#power BI", 
        icon: powerBiicon, 
        color: "#ffee32"
       },
       { 
        title: "Excel", 
        hash: "#Excel", 
        icon: excelicon, 
        color: "#2d6a4f"
       },
       {
        title: "Fabric", 
        hash: "#Fabric", 
        icon: fabricIcon, 
        color: "#2d6a4f"
       }
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Cloud Computing",
    skills: [
      { 
        title: "AWS",
        hash: "#aws",
        icon: awsicon, 
        color: "#f48c06" 
      },
      { 
        title: "Microsoft Azure",
        hash: "#azure",
        icon: azureicon, 
        color: "#00b4d8" 
      },
      
    ],
  },
] as const;

export const navLinks = [
  { fr: "Home", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Projets", en: "Projects", hash: "#projects", icon: GoProject },
  { fr: "A Propos De Moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { fr: "Impression", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { fr: "Confidentialité", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:fallahmed100@gmail.com",
  text: "fallahmed100@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/ahmed-fall-fall/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/FALL-Ahmed",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:fallahmed100@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    fr: "Il ne s'agit pas d'avoir beaucoup de données, mais de savoir quoi en faire.",
    en: "It's not about having a lot of data, but knowing what to do with it.",
    author: "W. Edwards Deming",
  },
  {
    fr: '"Les données sont la clé pour libérer le potentiel de votre entreprise"',
    en: `"Data is the key to unlocking your business’s potential."`,
  },
] as const;

export const aboutMeData = {
  title: "A propos de moi",
  title_EN: "About me",
  description: "Mon parcours",
  description_EN: "My background",
  paragraphs_FR: [
    {
      title: "Parcours Académique",
      description:
        `Diplôme d'Ingénieur en Informatique et Management des Systèmes`,
      icon: hardwareicon,
    },
    {
      title: "Parcours Professionnel",
      description:  `Data Analyst & BI`,
      icon: workicon,
    },
    {
      title: "Contact",
      description:
        `Data Engineer & BI Developer, Mauna Kea Consulting`,
      icon: contacticon,
    },
    
  ],
  paragraphs_EN: [
    {
      title: "Academic background",
      description:
        `Engineering Degree in Computer Science and Systems Management`,    
      icon: hardwareicon,
    },
    {
      title: "Career Paths",
      description:
        `Data Analyst & BI`,
      icon: workicon,
    },
    {
      title: "Contact",
      description:
        `Data Engineer & BI Developer, Mauna Kea Consulting`,
      icon: contacticon,
    },
  ],
};

export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Laissez-moi un message et je vous reviendrai dans les plus brefs delais",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Votre Nom",
        en: "Your Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "Votre email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez écrire votre email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Votre Requête",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez écrire votre requête",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Votre Message",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veillez écrire votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyez",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "J'accepte que Trésor utilise mes données personnelles (nom et adresse électronique) pour me contacter.",
      en: "I agree that Trésor may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous reconnaissez avoir pris connaissance de la politique privée",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en direct sera ouverte sous peu. Démarrage des serveurs...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Je vous remercie pour votre courriel. Je vous répondrai dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    fr: "🦄 Malheureusement, l'envoi de votre courriel n'a pas fonctionné. Veuillez réessayer plus tard",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    fr: "Veuillez indiquer votre nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
