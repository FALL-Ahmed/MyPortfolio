import excelicon from "../../assets/icons/excelicon.svg";
import powerBiicon from "../../assets/icons/powerBiicon.svg";
import sqlicon from "../../assets/icons/sqlicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import dataWIcon from "../../assets/icons/dataW.svg";
import medibien from "../../assets/img/medibien.png";
import inpc from "../../assets/img/inpc.png"
import profilepicture from "../img/me21.png";
import madrastak from "../../assets/img/madrastak.png";
import profia from "../../assets/img/profia.jpg";
import tchoopp from "../../assets/img/tchoopp.jpg";
import contacticon from "../../assets/icons/contact.svg";
import workicon from "../../assets/icons/work.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail, FiLink } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";
import awsicon from "../../assets/icons/awsicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import iaicon from "../../assets/icons/AI.svg";
import mlicon from "../../assets/icons/ML.svg";
import apiicon from "../../assets/img/API.png";

export const headerIntroData = {
  title: {
    fr: "Hi, C'est Ahmed",
    en: "Hi, I'm Ahmed",
  },
  subtitle: {
    fr: "Ingénieur Data, IA Générative & Agents IA",
    en: "Data, Generative AI & AI Agents Engineer",
  },
  description: {
    fr: "Je suis FALL Ahmed, ingénieur spécialisé en IA générative et systèmes agents. Je conçois et industrialise des assistants intelligents, des pipelines RAG avancés et des architectures multi-agents pour les entreprises. Je transforme vos défis métier en solutions IA robustes et scalables.",
    en: "I am FALL Ahmed, an engineer specializing in generative AI and agent systems. I design and industrialize intelligent assistants, advanced RAG pipelines, and multi-agent architectures for enterprise environments. I transform your business challenges into robust, scalable AI solutions.",
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
    title: "Professeur IA",
    description:
      "J’ai construit un professeur IA qui répond mieux que la plupart des humains sur le programme SVT. Le pipeline RAG extrait le manuel scolaire, le découpe, l’indexe dans FAISS et retrouve les passages exacts en millisecondes. Claude ou Mistral génère ensuite des réponses adaptées au niveau de l’élève. Zéro hallucination sur le programme. Tourne en local ou en cloud.",
    description_EN:
      "Mobile application in development for Mauritanian students. Covers all subjects of the official national curriculum, answers students' questions 24/7 and adapts responses to each student's level. Built on a RAG architecture with FAISS vector indexing and response generation via Claude (Anthropic) or Mistral.",
    technologies: [
      { name: "Python", icon: pythonicon },
      { name: "FAISS", icon: mlicon },
      { name: "Claude Anthropic", icon: iaicon },
      { name: "FastAPI", icon: apiicon },
    ],
    image: profia,
    deploymenturl: "",
    deploymenticon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#7B2FBE",
    },
  },
  {
    title: "Tchoop — Plateforme de Livraison",
    description:
      "Startup de livraison de repas en Mauritanie. Application mobile multi-rôles (client, livreur, restaurant, admin) couvrant la gestion des commandes en temps réel, les paiements, la géolocalisation et les notifications push. Intègre 3 agents IA autonomes déployés en production (marketing, social media, récupération de paniers abandonnés) ainsi qu'un chatbot IA pour piloter la plateforme.",
    description_EN:
      "Food delivery startup in Mauritania. Multi-role mobile application (client, deliverer, restaurant, admin) covering real-time order management, payments, geolocation and push notifications. Integrates 3 autonomous AI agents deployed in production (marketing, social media, cart abandonment recovery) and an AI chatbot to manage the platform.",
    technologies: [
      { name: "Claude API", icon: iaicon },
      { name: "React Native", icon: javascripticon },
      { name: "Firebase", icon: awsicon },
      { name: "TypeScript", icon: javascripticon },
    ],
    image: tchoopp,
    deploymenturl: "",
    deploymenticon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FF7000",
    },
  },
  {
    title: "Madrastak",
    description:
      "Plateforme SaaS de gestion scolaire couvrant les absences, emplois du temps, notes, bulletins et tableaux de bord administratifs. Architecture moderne avec backend NestJS (API REST) et frontend React. Conçue pour les établissements scolaires avec gestion multi-rôles (admin, enseignant, parent, élève).",
    description_EN:
      "School management SaaS platform covering absences, schedules, grades, report cards and administrative dashboards. Modern architecture with NestJS backend (REST API) and React frontend. Designed for educational institutions with multi-role management (admin, teacher, parent, student).",
    technologies: [
      { name: "NestJS", icon: javascripticon },
      { name: "React", icon: javascripticon },
      { name: "SQL", icon: sqlicon },
      { name: "API REST", icon: apiicon },
    ],
    image: madrastak,
    deploymenturl: "",
    deploymenticon: FiGithub,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#2d6a4f",
    },
  },
  {
    title: "Analyse INPC — Mauritanie",
    description:
      "Analyse approfondie de l’Indice National des Prix à la Consommation en Mauritanie, couvrant les variations mensuelles et annuelles par secteur (alimentation, logement, biens essentiels). Fournit une vision claire de l’évolution des prix pour appuyer la prise de décision économique.",
    description_EN:
      "In-depth analysis of the National Consumer Price Index in Mauritania, covering monthly and annual variations by sector (food, housing, essential goods). Provides a clear view of price evolution to support economic decision-making.",
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
    title: "MEDIBIEN Centre Hospitalier",
    description:
      "Rapport dynamique proposant une cartographie des pathologies, une analyse des données patients, des tendances de santé et une optimisation des opérations hospitalières. Offre aux établissements des insights précieux pour améliorer la gestion des ressources et la qualité des soins.",
    description_EN:
      "Dynamic report providing a mapping of pathologies, patient data analysis, health trends, and hospital operational optimization. Offers valuable insights to healthcare institutions to improve resource management and quality of care.",
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
    skillsTitle: "Dev & Data",
    skills: [
      {
        title: "React / React Native",
        hash: "#React",
        icon: javascripticon,
        color: "#61DAFB"
      },
      {
        title: "Node.js / NestJS",
        hash: "#NodeJS",
        icon: javascripticon,
        color: "#68A063"
      },
      {
        title: "SQL",
        hash: "#SQL",
        icon: sqlicon,
        color: "#61DAFB"
      },
      {
        title: "Power BI",
        hash: "#PowerBI",
        icon: powerBiicon,
        color: "#ffee32"
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "IA Générative & LLMs",
    skills: [
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#e7aa0e"
      },
      {
        title: "LangChain",
        hash: "#LangChain",
        icon: iaicon,
        color: "#1C3C3C"
      },
      {
        title: "OpenAI / Anthropic",
        hash: "#OpenAI",
        icon: iaicon,
        color: "#00A67E"
      },
      {
        title: "Fine-tuning / LoRA",
        hash: "#FineTuning",
        icon: mlicon,
        color: "#eead05"
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "RAG & Agents IA",
    skills: [
      {
        title: "Vector DB",
        hash: "#VectorDB",
        icon: dataWIcon,
        color: "#61DAFB",
      },
      {
        title: "LangGraph",
        hash: "#LangGraph",
        icon: mlicon,
        color: "#1C3C3C",
      },
      {
        title: "AutoGen / CrewAI",
        hash: "#AutoGen",
        icon: iaicon,
        color: "#00700c",
      },
      {
        title: "REST / GraphQL",
        hash: "#API",
        icon: apiicon,
        color: "#38b6ff",
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
    fr: "L’IA générative ne remplace pas l’intelligence humaine — elle l’amplifie.",
    en: "Generative AI doesn’t replace human intelligence — it amplifies it.",
  },
  {
    fr: `"Les agents IA sont la prochaine évolution du logiciel d’entreprise."`,
    en: `"AI agents are the next evolution of enterprise software."`,
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
      description: `Auto-entrepreneur & Freelance — Ingénieur IA Générative, Agents IA & Data`,
      icon: workicon,
    },
    {
      title: "Contact",
      description:
        `Disponible pour missions freelance en IA Générative, Agents IA & Data Analyst`,
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
      description: `Freelancer & Entrepreneur — Generative AI, AI Agents & Data Analyst`,
      icon: workicon,
    },
    {
      title: "Contact",
      description:
        `Available for freelance missions in Generative AI, AI Agents & Data Analyst`,
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












