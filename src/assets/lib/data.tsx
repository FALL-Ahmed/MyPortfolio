import excelicon from "../../assets/icons/excelicon.svg";
import powerBiicon from "../../assets/icons/powerBiicon.svg";
import FabricIcon from "../../assets/icons/fqbrics.png"
import sqlicon from "../../assets/icons/sqlicon.svg";
import Dataicon from "../../assets/icons/Data-Governance.png";
import pythonicon from "../../assets/icons/pythonicon.svg";
import maurimap from "../../assets/img/Maurimap.png";
import Teradataicon from "../../assets/img/Teradata.png";
import dataWIcon from "../../assets/icons/dataW.svg";
import TableauIcon from "../../assets/icons/Tableau.png";
import Ricon from "../../assets/icons/R.png";
import medibien from "../../assets/img/medibien.png";
import mammamia2 from "../../assets/img/slide2.webp";
import zephyr from "../../assets/img/zephyr.png"
import inpc from "../../assets/img/inpc.png"
import profilepicture from "../img/me21.png";
import contacticon from "../../assets/icons/contact.svg";
import workicon from "../../assets/icons/work.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail, FiLink } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import awsicon from "../../assets/icons/awsicon.svg";
import SAPicon from "../../assets/icons/SAP.png";
import javascripticon from "../../assets/icons/javascripticon.svg";
import iaicon from "../../assets/icons/AI.svg";
import mlicon from "../../assets/icons/ML.svg";
import Dockericon from "../../assets/icons/Docker.png";
import Kubericon from "../../assets/icons/Kubernetes.png";
import apiicon from "../../assets/img/API.png";

export const headerIntroData = {
  title: {
    fr: "Hi, C'est Ahmed",
    en: "Hi, I'm Ahmed",
  },
  subtitle: {
    fr: "Ingénieur Data Analyst & Business Intelligence",
    en: "Data Analyst & Business Intelligence Engineer",
  },
  description: {
    fr: "Je suis FALL Ahmed, un passionné d'analyse qui voit le potentiel caché derrière chaque donnée. j’aide les entreprises à visualiser et comprendre leurs données avec des tableaux de bord sur mesure, quel que soit le secteur d'activité. À mes yeux, chaque information est une clé qui peut ouvrir la porte à de nouvelles opportunités. Laissez-vous inspirer par  mes réalisations et faisons de vos chiffres une force stratégique!",
    en: "I am FALL Ahmed, a passionate analyst who sees the hidden potential behind every piece of data. I help companies visualize and understand their data with tailor-made dashboards, whatever the sector of activity. In my eyes, every piece of information is a key that can unlock new opportunities. Let yourself be inspired by my achievements, and let's turn your numbers into a strategic asset!",
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
    title: "Analyse INPC - Mauritanie",
    description:
      "Ce projet consiste en une analyse approfondie de l'indice national des prix à la consommation (INPC) en Mauritanie, en se concentrant sur les variations mensuelles et annuelles selon les fonctions et nomenclatures secondaires. L'objectif est de fournir une vision claire de l’évolution des prix dans des secteurs spécifiques tels que l'alimentation, le logement, et d'autres biens essentiels. ",
    description_EN:
      "This project involves an in-depth analysis of the National Consumer Price Index (INPC) in Mauritania, focusing on monthly and annual variations according to functions and secondary classifications. The goal is to provide a clear view of price evolution in specific sectors such as food, housing, and other essential goods. ",
      technologies: [
        { name: "Power BI", icon: powerBiicon },
        { name: "Excel", icon: excelicon },
      
    ],
    image: inpc,
    deploymenturl: "https://app.powerbi.com/view?r=eyJrIjoiYjRjZDkwN2UtYmYwZC00OWE0LWE3NGMtYTRjODg1NjE4OWE2IiwidCI6ImZmOGM2MDkwLTU2ZmEtNDk3Ni05NzUxLTlhNTQwYzAxYzExMCJ9&pageName=9f4a0c8894036de6b02e",

    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "ZEPHYR",
    description:
      "Analyse des performances des ventes pour une marque de vêtements fictive. Ce rapport propose une évaluation détaillée des ventes actuelles, avec des prévisions stratégiques basées sur les tendances des saisons passées. Grâce à des visualisations claires, l’analyse met en lumière les segments de marché les plus performants et identifie des opportunités pour améliorer les actions marketing et augmenter les parts de marché.",
    description_EN:
      "Sales performance analysis for a fictitious clothing brand. This report offers a detailed assessment of current sales, with strategic forecasts based on past season trends. Through clear visualizations, the analysis highlights the segments of best performing market and identifies opportunities to improve marketing actions and increase market share.",
      technologies: [
        { name: "Power BI", icon: powerBiicon },
        { name: "SQL", icon: sqlicon },
      
    ],
    image: zephyr,
    deploymenturl: "https://app.powerbi.com/view?r=eyJrIjoiMjI5N2VjNTAtNTAyMC00MmU3LWFjYWItZmQ2ZWMwYmJhNTZhIiwidCI6ImZmOGM2MDkwLTU2ZmEtNDk3Ni05NzUxLTlhNTQwYzAxYzExMCJ9&pageName=0cdcea913f3e8a8c98dd",

    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "MauriMap",
    description:
      "MauriMap est un projet de cartographie qui présente l'ensemble des localités de Mauritanie, des villes aux villages, en indiquant la présence ou l'absence d'infrastructures clés telles que les lycées, collèges, centres de santé, réseaux électriques et points d'eau potable. Ce projet vise à faciliter la compréhension des ressources disponibles à travers le territoire national, et la prise de décision pour les autorités locales et les ONG en matière de développement et d'allocation des ressources.",
    description_EN:
      "MauriMap is a mapping project that presents all localities in Mauritania, from towns to villages, indicating the presence or absence of key infrastructure such as high schools, colleges, health centers, electricity networks and points of contact. This project aims to facilitate the understanding of the resources available across the national territory, and decision-making for local authorities and NGOs in terms of development and resource allocation.",
      technologies: [
        { name: "Power BI", icon: powerBiicon },
        { name: "Excel", icon: excelicon },
      
    ],
    image: maurimap,
    deploymenturl: "https://app.powerbi.com/view?r=eyJrIjoiZGQ2N2E1YjAtZThmNi00ZTg1LThmZGUtOWQxMDc1NzQ3NzI1IiwidCI6ImZmOGM2MDkwLTU2ZmEtNDk3Ni05NzUxLTlhNTQwYzAxYzExMCJ9",

    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Mammamia gelato",
    description:
      "Analyse régionale des ventes de MammaMia Gelato, une entreprise locale de Dakar spécialisée dans la vente de glaces. Ce rapport offre un aperçu détaillé des ventes par région, L’analyse a été réalisée à l’aide de Power BI, en se basant sur les données des ventes des trois derniers trimestres. Grâce à cette analyse, l’entreprise a identifié une opportunité de croissance de 20 % dans certaines régions clés et a pu adapter sa stratégie de distribution en conséquence.",
    description_EN:
      "Regional sales analysis of MammaMia Gelato, a local company in Dakar specializing in the sale of ice cream. This report provides a detailed overview of sales by region. The analysis was carried out using Power BI, based on sales data from the last three quarters Through this analysis, the company identified a 20% growth opportunity in certain key regions and was able to adapt its distribution strategy accordingly.",
    technologies: [
      { name: "Power BI", icon: powerBiicon },
      { name: "Excel", icon: excelicon },
    ],
    image: mammamia2,
    deploymenturl: "",
    
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "MEDIBIEN Centre Hospitalier",
    description:
      "Ce rapport dynamique propose une cartographie des pathologies, une analyse des données patients, des tendances de santé et une optimisation des opérations et la satisfaction des clients, offrant aux hôpitaux des insights précieux pour améliorer la gestion des ressources et la qualité des soins.",
    description_EN:
      "This dynamic report provides a mapping of pathologies, patient data analysis, health trends, and operational optimization, along with client satisfaction, offering hospitals valuable insights to enhance resource management and improve the quality of care.",
    technologies: [
      { name: "Power BI", icon: powerBiicon },
      { name: "Excel", icon: excelicon },
    ],
    image: medibien,
    deploymenturl: "https://app.powerbi.com/view?r=eyJrIjoiMzFkZDFlNWQtN2VhNy00NTFkLWIwYTctNDU2NmE0YTNlNGY4IiwidCI6ImZmOGM2MDkwLTU2ZmEtNDk3Ni05NzUxLTlhNTQwYzAxYzExMCJ9",
    
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
    skillsTitle: "Compétences Supplémentaires",
    skills: [
      { 
        title: "AWS",
        hash: "#AWS",
        icon: awsicon, 
        color: "#f48c06" 
      },
      { 
        title: "SAP CLOUD",
        hash: "#SAP CLOUD",
        icon: SAPicon, 
        color: "#00b4d8" 
      },
      { 
        title: "JAVASCRIPT",
        hash: "#JAVASCRIPT",
        icon: javascripticon, 
        color: "#f5e130" 
      },
      { 
        title: "Docker",
        hash: "#Docker",
        icon: Dockericon, 
        color: "#ffffff" 
      },
      { 
        title: "Kubernetes",
        hash: "#Kubernetes",
        icon: Kubericon, 
        color: "#000000" 
      },
      { 
        title: "API",
        hash: "#API",
        icon: apiicon, 
        color: "#38b6ff" 
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
        color: "#e7aa0e",
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
        title: "Microsoft Fabric", 
        hash: "#Microsoft Fabric", 
        icon: FabricIcon, 
        color: "#6fe9b8"
       },
       {
        title: "R Studio", 
        hash: "#R Studio", 
        icon: Ricon, 
        color: "#a6a6a6"
       }
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Business Intelligence",
    skills: [
      
      {
        title: "Data Warehouse",
        hash: "#Data Warehouse",
        icon: dataWIcon,
        color: "#61DAFB",
      },
      {
        title: "Data Gouv",
        hash: "#Data gouv",
        icon: Dataicon,
        color: "#00700c",
      },
      {
        title: "Tableau",
        hash: "#Tableau",
        icon: TableauIcon,
        color: "#ffffff",
      },
      {
        title: "Teradata",
        hash: "#Teradata",
        icon: Teradataicon,
        color: "#f6f612",
      },
      { 
        title: "Intelligence Artificielle (IA)",
        hash: "#Intelligence Artificielle (IA)",
        icon: iaicon, 
        color: "#004aad" 
      },
      { 
        title: "Machine Learning (ML)",
        hash: "#Machine Learning (ML)",
        icon: mlicon, 
        color: "#eead05" 
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
    fr: "Ce qui compte, ce n'est pas la quantité d'informations, mais la manière dont on les utilise.",
    en: "The important thing is not the quantity of information, but how we use it.",
    
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
      description:  `Data Analyst Indépendant`,
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
        `Independent Data Analyst`,
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
      fr: "J'accepte que Ahmed utilise mes données personnelles (nom et adresse électronique) pour me contacter.",
      en: "I agree that Ahmed may use my personal data (name and e-mail address) to contact me.",
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
