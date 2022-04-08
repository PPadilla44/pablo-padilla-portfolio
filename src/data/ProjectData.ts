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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis viverra amet, pharetra, morbi malesuada eros. Ut quis varius sapien, vivamus in eget montes. Orci ut quam gravida sed viverra enim nulla ornare."
    },
    {
        title: "Draw It",
        mainImage: {
            path:"/images/drawDashDesk.png",
            name: "Draw It Desktop"
        },
        secondaryImage: {
            path: "/images/drawDashM.jpg",
            name: "Draw it Mobile"
        },
        links: ["https://github.com/PPadilla44/draw_something", "http://3.128.205.160"],
        techs: ["cib:python", "cib:flask", "simple-icons:jinja", "fontisto:mysql", "cib:javascript", "simple-icons:bootstrap"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada et in pharetra fringilla mauris bibendum. Id leo diam et sed lectus aliquet. Nulla mi neque, dictum donec erat nec interdum vitae quis.",
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis congue id arcu consectetur scelerisque cras. Pellentesque sed viverra orci quis id. Odio integer viverra scelerisque odio massa varius diam volutpat."
    },

]