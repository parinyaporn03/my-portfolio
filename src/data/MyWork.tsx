import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiAntdesign, SiReactrouter } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import apicook from "../assets/works/apicook.png";
import apiuser from "../assets/works/apiuser.png";
import css from "../assets/css.png";
import news from "../assets/works/news.png";
import vocab from "../assets/works/vocab.png";
import weather from "../assets/weather.png";
import card from "../assets/card.png";
import form from "../assets/form.png";
import todolistvue from "../assets/todolist-vue.png";
import picturematching from "../assets/picturematching.png";
import { AiFillApi } from "react-icons/ai";

export const works = [
  {
    title: "Recipes",
    bg: apicook,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "React",

        element: <FaReact />,
      },
      {
        iconName: "Ant Design",
        element: <SiAntdesign />,
      },
      {
        iconName: "Typescript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "Tailwind CSS",
        element: <RiTailwindCssFill />,
      },
      { iconName: "RESTfulAPI", element: <AiFillApi /> },
    ],

    link: "https://parinyaporn03.github.io/recipes/",
  },
  {
    title: "User List",
    bg: apiuser,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "React",
        element: <FaReact />,
      },
      {
        iconName: "Ant Design",
        element: <SiAntdesign />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "Redux",
        element: <SiRedux />,
      },
      {
        iconName: "Tailwind CSS",
        element: <RiTailwindCssFill />,
      },
      { iconName: "RESTfulAPI", element: <AiFillApi /> },
      {
        iconName: "RTKQuery",
        element: (
          <div className="text-xs font-bold text-center">
            <div>RTK</div>
            <div>Query</div>
          </div>
        ),
      },
    ],
    link: "https://parinyaporn03.github.io/api-user-list/",
  },
  {
    title: "OGS News",
    bg: news,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "React",
        element: <FaReact />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "Tailwind CSS",
        element: <RiTailwindCssFill />,
      },
      {
        iconName: "React Router",
        element: <SiReactrouter />,
      },
    ],
    link: "https://parinyaporn03.github.io/ogs-news/",
  },
  {
    title: "Vocabulary",
    bg: vocab,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "React",

        element: <FaReact />,
      },
      {
        iconName: "Ant Design",
        element: <SiAntdesign />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "Tailwind CSS",
        element: <RiTailwindCssFill />,
      },
    ],

    preview: true,
    link: "https://parinyaporn03.github.io/vocabulary-game/",
  },
];

export const mini_project = [
  {
    title: "Picture Matching",
    bg: picturematching,
    skills: [
      "Created website layouts using Tailwind CSS.",
      "Created websites using Vue 3.",
    ],
    link: "https://parinyaporn03.github.io/picture-matching/",
  },
  {
    title: "Todo List",
    bg: todolistvue,
    skills: [
      "Practiced using Vue 3.",
      "Handled data passing through props in Vue.",
    ],
    link: "https://parinyaporn03.github.io/todolist-vue/",
  },
  {
    title: "Landing Page",
    bg: css,
    skills: [
      "Created website layouts using HTML & CSS",
      "Used Flexbox and Grid",
    ],
    link: "https://parinyaporn03.github.io/landing-page/",
  },
  {
    title: "Weather Dashboard",
    bg: weather,
    skills: ["Used UI libraries with React, such as Ant Design."],
    link: "https://parinyaporn03.github.io/weather-dashboard/",
  },
  {
    title: "Christmas Card",
    bg: card,
    skills: [
      "Created website layouts using Tailwind CSS.",
      "Used Tailwind CSS for responsive design.",
    ],
    link: "https://parinyaporn03.github.io/christmas-card/",
  },
  {
    title: "Register Form",
    bg: form,
    skills: [
      "Used Redux for state management.",
      "Used properties from Ant Design forms.",
    ],
    link: "https://parinyaporn03.github.io/register-form/",
  },
];

export const skills = [
  {
    iconName: "React",
    element: <FaReact />,
  },
  {
    iconName: "React Router",
    element: <SiReactrouter />,
  },
  {
    iconName: "Redux",
    element: <SiRedux />,
  },
  {
    iconName: "RTK Query",
    element: (
      <div className="text-xs font-bold text-center">
        <div>RTK</div>
        <div>Query</div>
      </div>
    ),
  },
  {
    iconName: "Next.js",
    element: <RiNextjsLine />,
  },
  {
    iconName: "API",
    element: <AiFillApi />,
  },
  {
    iconName: "HTML",
    element: <FaHtml5 />,
  },
  {
    iconName: "CSS",
    element: <FaCss3Alt />,
  },
  {
    iconName: "Tailwind CSS",
    element: <RiTailwindCssFill />,
  },
  {
    iconName: "Ant Design",
    element: <SiAntdesign />,
  },
  {
    iconName: "TypeScript",
    element: <BiLogoTypescript />,
  },
];
