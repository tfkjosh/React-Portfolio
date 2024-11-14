import AmazonNavigatorImgSrc from "./assets/Project1.png";
import PlantParenthoodImgSrc from "./assets/Project2.png";
import PasswordGeneratorImgSrc from "./assets/Project3.png";
import TextEditorImgSrc from "./assets/Project4.png";
export const headerOptions = [
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "About Me",
        href: "#about-me",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];
export const projects = [
    {
        id: "amazonNavigator",
        imgSrc: AmazonNavigatorImgSrc,
        githubHref: "https://github.com/alla0810/Group9",
        livePreviewHref: "https://alla0810.github.io/AmazonNavigator/",
        description: "The AMAZON NAVIGATOR is designed for customers to view item reviews and pricing.",
    },
    {
        id: "plantParenthood",
        imgSrc: PlantParenthoodImgSrc,
        githubHref: "https://github.com/VictoriaSweet/scary-potato",
        livePreviewHref: "https://nameless-wave-14504-8d3cae4aaa8e.herokuapp.com/",
        description: "Plant Parenthood is the application to help the those who are new to the hobby or just maybe even a weekend plant-sitter or award winning growers.",
    },
    {
        id: "passwordGenerator",
        imgSrc: PasswordGeneratorImgSrc,
        githubHref: "https://github.com/tfkjosh/Password-generator",
        livePreviewHref: "https://tfkjosh.github.io/Password-generator/",
        description: "This application is designed for an employee to generate a random password based on criteria they've selected.",
    },
    {
        id: "textEditor",
        imgSrc: TextEditorImgSrc,
        githubHref: "https://github.com/tfkjosh/PWA-Challenge",
        livePreviewHref: "https://pwa-challenge1-b508091ee337.herokuapp.com/",
        description: "This application features a number of data persistence techniques, insuring the application runs regardless of browser supported function.",
    },
];
export const technologies = [
    {
        name: "HTML",
        level: "Beginner",
    },
    {
        name: "CSS",
        level: "Beginner",
    },
    {
        name: "Tailwind",
        level: "Beginner",
    },
    {
        name: "Bootstrap",
        level: "Beginner",
    },
    {
        name: "Javascript",
        level: "Beginner",
    },
    {
        name: "Typescript",
        level: "Beginner",
    },
    {
        name: "JQuery",
        level: "Beginner",
    },
    {
        name: "Figma",
        level: "Beginner",
    },
    {
        name: "Angular",
        level: "Beginner",
    },
    {
        name: "React",
        level: "Beginner",
    },
    {
        name: "React Native",
        level: "Beginner",
    },
];
export const additionalSkills = [
    "Git Flow",
    "MySQL",
    "Express",
    "Apollo Server",
    "GraphQL",
    "NodeJS",
    "Web-API",
    "Object-Oriented Programming",
];
export const experienceWidthByLevel = {
    Beginner: 10,
    Intermediate: 60,
    Advanced: 100,
};
export const inputClassName = "bg-white/95 rounded p-4 text-black/80 placeholder:text-black/80";
//# sourceMappingURL=constants.js.map