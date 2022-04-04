import { ProjectBlockProps } from "../components/ProjectBlock/ProjectBlock";

export const ProjectData: ProjectBlockProps[] = [
    {
        title: "What Are The Odds?!",
        imgPaths: ['/images/drawit.png'],
        links: ["https://github.com/PPadilla44/WhatAreTheOdds", "https://apps.apple.com/us/app/what-are-the-odds/id1615466936"],
        techs: ["React Native", "TypeScript", "Babel", "IOS", "Jest", "Expo"],
        description: "Developed Java web application using the Spring Boot framework for ease of dependency management. Developed Java web application using the Spring Boot framework for ease of dependency management."
    },
    {
        title: "Draw It",
        imgPaths: ['/images/drawDashD.png', "/images/drawDashM.jpg"],
        links: ["https://github.com/PPadilla44/draw_something", "http://3.128.205.160"],
        techs: ["Python", "Flask", "Jinja2", "MySQL", "JavaScript", "BootStrap"],
        description: "Saved and manipulated data using MYSQL for its data security and easily created relationships between users and their creations.",
        reversed: true
    },
    {
        title: "Discord Clone",
        imgPaths: ['/images/Discord.png', "/images/DiscordLogo.svg"],
        imagePos: "object-left",
        links: ["https://github.com/PPadilla44/Discord-Clone"],
        techs: ["MERN", "MongoDB", "Express", "React", "NodeJS", "Socket io"],
        description: "Led a team to develop a clone of Discord using Nodejs back-end framework and React front-end framework for a responsive one-page web application"
    },

]