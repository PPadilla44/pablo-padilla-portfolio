import { ProjectBlockProps } from "../components/ProjectBlock/ProjectBlock";

export const ProjectData: ProjectBlockProps[] = [
  {
    title: "Kindheld",
    brandLogo: "/images/kindheld_icon.png",
    brandAccent: "#D2583E",
    tagline: "AI · Web · Live",
    brandLine: "Show up for the people who matter most.",
    mainImage: {
      path: "/images/kindheld_logo_black.png",
      darkPath: "/images/kindheld_logo_white.png",
      name: "Kindheld — relationship memory assistant",
      fit: "brand",
    },
    links: ["https://kindheld.com"],
    techs: [
      "logos:react",
      "logos:tailwindcss-icon",
      "logos:fastapi-icon",
      "logos:python",
      "simple-icons:anthropic",
      "vscode-icons:file-type-mongo",
    ],
    description: `A relationship memory assistant that helps you show up for the people who matter most. Add notes about the people in your life, set reminders for important moments, and get AI-drafted messages so you never forget to follow up — built to solve a deeply human problem: not that people don't care, but that life gets busy.`,
  },
  {
    title: "Rallier",
    brandLogo: "/images/rallier_logo.png",
    brandAccent: "#22C55E",
    tagline: "Real-time · Groups",
    mainImage: {
      path: "/images/rallier_home.png",
      name: "Rallier home screen — upcoming plans and RSVPs",
      fit: "contain",
    },
    secondaryImage: {
      path: "/images/rallier_rsvp.png",
      name: "Rallier event detail — RSVP flow for a confirmed plan",
    },
    links: [
      "https://apps.apple.com/us/app/rallier/id6762495031"
    ],
    status: "Coming to App Store",
    techs: [
      "mdi:react",
      "cib:typescript",
      "cib:expo",
      "logos:nodejs",
      "logos:postgresql",
      "cib:apple",
    ],
    description: `A social planning app that makes coordinating with friends effortless — discover local activities, vote on plans, and lock in details in one place. Real-time collaboration, location-based recommendations, and push notifications remove the friction between "we should hang out" and actually showing up.`,
  },
  {
    title: "What Are The Odds?!",
    mainImage: {
      path: "/images/odds.png",
      name: "What Are The Odds?! Mobile",
      fit: "contain",
    },
    links: [
      "https://github.com/PPadilla44/WhatAreTheOdds",
      "https://apps.apple.com/us/app/what-are-the-odds/id1615466936",
    ],
    techs: ["mdi:react", "cib:typescript", "mdi:babel", "mdi:apple", "file-icons:jest", "cib:expo"],
    description: `Do you ever wonder about your odds of winning the lottery, getting heads in a coin flip, or catching a home run? With this app, you can set your own odds and continuously click a button until you hit them.`,
  },
];
