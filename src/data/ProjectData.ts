import { ProjectBlockProps } from "../components/ProjectBlock/ProjectBlock";

export const ProjectData: ProjectBlockProps[] = [
  {
    title: "What Are The Odds?!",
    mainImage: {
      path: "/images/odds.png",
      name: "What Are The Odds?! Mobile",
      fit: "contain",
    },
    links: ["https://github.com/PPadilla44/WhatAreTheOdds"],
    techs: ["mdi:react", "cib:typescript", "mdi:babel", "mdi:apple", "file-icons:jest", "cib:expo"],
    description: `Do you ever wonder about your odds of winning the lottery, getting heads in a coin flip, or catching a home run? With this app, you can set your own odds and continuously click a button until you hit them.`,
  },
];
