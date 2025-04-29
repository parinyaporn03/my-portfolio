import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiAntdesign } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import apicook from "../assets/works/apicook.png";
import apiuser from "../assets/works/apiuser.png";
import css from "../assets/css.png";
import news from "../assets/works/news.png";
import vocab from "../assets/works/vocab.png";
import weather from "../assets/weather.png";
import card from "../assets/card.png";
import form from "../assets/form.png";
import todolist from "../assets/todolist.png";

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
        iconName: "AntDesign",
        element: <SiAntdesign />,
      },
      {
        iconName: "Typescript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
      { iconName: "RESTfulAPI", element: <></> },
    ],

    link: "",
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
        iconName: "AntDesign",
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
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
      { iconName: "RESTfulAPI", element: <></> },
      { iconName: "RTKQuery", element: <></> },
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
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
      { iconName: "ReactRouter", element: <></> },
    ],
    link: "https://parinyaporn03.github.io/ogs-news/",
  },
  {
    title: "Vocabulary Game",
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
        iconName: "AntDesign",
        element: <SiAntdesign />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
    ],

    preview: true,
    link: "https://parinyaporn03.github.io/vocabulary-game/",
  },
];

export const mini_project = [
  {
    title: "Landing Page",
    bg: css,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "CSS",

        element: <FaCss3Alt />,
      },
      {
        iconName: "React",

        element: <FaReact />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
    ],
    link: "https://parinyaporn03.github.io/landing-page/",
  },
  {
    title: "Weather Dashboard",
    bg: weather,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "CSS",

        element: <FaCss3Alt />,
      },
      {
        iconName: "React",

        element: <FaReact />,
      },
      {
        iconName: "AntDesign",
        element: <SiAntdesign />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
    ],
    link: "https://parinyaporn03.github.io/weather-dashboard/dashboard-1",
  },
  {
    title: "Christmas Card",
    bg: card,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "CSS",

        element: <FaCss3Alt />,
      },
      {
        iconName: "React",

        element: <FaReact />,
      },
      {
        iconName: "AntDesign",
        element: <SiAntdesign />,
      },
      {
        iconName: "TypeScript",
        element: <BiLogoTypescript />,
      },
      {
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
    ],
    link: "https://parinyaporn03.github.io/christmas-card/",
  },
  {
    title: "Register Form",
    bg: form,
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
        iconName: "AntDesign",
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
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
    ],
    link: "https://parinyaporn03.github.io/register-form/",
  },
  {
    title: "Todo List",
    bg: todolist,
    skills: [
      {
        iconName: "HTML",
        element: <FaHtml5 />,
      },
      {
        iconName: "CSS",

        element: <FaCss3Alt />,
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
        iconName: "TailwindCSS",
        element: <RiTailwindCssFill />,
      },
    ],
    link: "https://parinyaporn03.github.io/todo-list/",
  },
];
