import { ProjectBlockProps } from "../components/ProjectBlock/ProjectBlock";

export const ProjectData: ProjectBlockProps[] = [
    {
        title: "What Are The Odds?!",
        mainImage: {
            path: "/images/odds.png",
            name: "What Are The Odds?! Mobile"
        },
        links: ["https://github.com/PPadilla44/WhatAreTheOdds", "https://apps.apple.com/us/app/what-are-the-odds/id1615466936"],
        techs: ["mdi:react", "cib:typescript", "mdi:babel", "mdi:apple", "file-icons:jest", "cib:expo"],
        description: `Do you ever wonder about your odds of winning the lottery, getting heads in a coin flip, or catching a home run? With this app, You can set your own odds and continuously click a button until you hit those odds.`
    },
    {
        title: "Draw It",
        mainImage: {
            path: "/images/drawDashDesk.png",
            name: "Draw It Desktop"
        },
        secondaryImage: {
            path: "/images/drawDashM.jpg",
            name: "Draw it Mobile"
        },
        links: ["https://github.com/PPadilla44/draw_something"],
        techs: ["cib:python", "cib:flask", "simple-icons:jinja", "fontisto:mysql", "cib:javascript", "simple-icons:bootstrap"],
        description: `Play with your friends by drawing a word you select and see if they can guess it! If they guess it correctly,
            you both get points! This web application was built with Python using the Flask framework focused on engineering drawing functionality in Javascript without libraries.`,
        reversed: true
    },
    {
        title: "Discord Clone",
        mainImage: {
            path: "/images/DiscordDesk.png",
            className: "object-left",
            name: "Discord Clone Desktop"
        },
        secondaryImage: {
            path: "/images/DiscordLogo.svg",
            name: "Disord Logo",
            className: "border-0 shadow-none"
        },
        links: ["https://github.com/PPadilla44/Discord-Clone"],
        techs: ["bxl:mongodb", "simple-icons:express", "mdi:react", "mdi:nodejs", "cib:socket-io", "cib:javascript"],
        description: `Clone of Discord's messaging interface and services. You can create an account, add friends, and instant message them. 
        Collab with a group of people using the group chat feature. And get notified instantly with the use of the Socket io library in React.`
    },

]