import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "home", text: "home" },
  { id: nanoid(), href: "skills", text: "skills" },
  { id: nanoid(), href: "about", text: "about" },
  { id: nanoid(), href: "projects", text: "projects" },
];

export const social = [
  {
    id: nanoid(),
    url: "https://github.com/NorCoolTech",
    icon: <FaGithub />,
  },
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/norbertkulacin",
    icon: <FaLinkedin />,
  },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs/>,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact/>,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "../public/projects/todo-app.png",
    url: "https://modern-todo-react-app.netlify.app/",
    github: "https://github.com/NorCoolTech/Todo",
    title: "react to do app",
    text: "This project is a simple React-based to-do application designed to help users manage their tasks efficiently. The entire application offers a user-friendly interface, real-time updates, and visual cues for task completion status. The use of React hooks and local storage ensures a seamless user experience.",
  },
  {
    id: nanoid(),
    img: "",
    url: "https://react-images-api.netlify.app/",
    github: "https://github.com/NorCoolTech/Unsplash-Images",
    title: "Stock Images Gallery",
    text: "The Stock Images Gallery is a dynamic React app showcasing high-quality Unsplash API images. Key Features: Dynamic Theme Toggle, Search Functionality, Flexible Gallery Filters, Random Image Mode. Technologies: React, Vite, React Query, FontAwesome, React Icons, Axios for smooth Unsplash API communication.",
  },
  {
    id: nanoid(),
    img: "../public/projects/cocktail-finder.png",
    url: "https://cocktail-tracker.netlify.app/",
    github: "https://github.com/NorCoolTech/cocktail-finder",
    title: "Cocktail Finder",
    text: "Cocktail Finder is a web app that lets you explore a variety of cocktails effortlessly. It uses React and React Router for a modern and interactive experience, allowing smooth navigation between sections without reloading the entire page.",
  },
  {
    id: nanoid(),
    img: "",
    url: "https://restaurant-tilt-menu.netlify.app/",
    github: "https://github.com/NorCoolTech/restaurant-menu",
    title: "restaurant-menu",
    text: "React Menu App Description A straightforward React application that showcases a menu with various food items. Users can filter the menu items by categories, including breakfast, lunch, and shakes, using interactive buttons.",
  },
  {
    id: nanoid(),
    img: "../public/projects/react-carousel.png",
    url: "https://react-carousel-unsplash-images.netlify.app/",
    github: "https://github.com/NorCoolTech/react-carousel",
    title: "react-carousel",
    text: "Overview this project is a React-based carousel application that showcases two different implementations of image sliders. The first implementation utilizes custom JavaScript and CSS to create a simple and interactive carousel. The second implementation leverages the popular React Slick library for a more feature-rich and dynamic experience.",
  },
];
