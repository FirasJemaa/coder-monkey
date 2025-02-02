import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Coders Monkeys",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formations",
        baseUrl: "https://firasjemaa.github.io/portfolio/",
        type: "external"
    }
];

const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal"
    }
];

const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    }
];

export const footerReseauLinks: AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com/in/firas-jemaa/",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Youtube",
        baseUrl: "https://www.youtube.com",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "Slack",
        baseUrl: "https://www.slack.com",
        type: "external",
        icon: RiSlackFill,
    }
];

export const footerLinks = [
    {
        title: "App",
        links: footerApplicationLinks
    },
    {
        title: "Utilisateurs",
        links: footerUsersLinks
    },
    {
        title: "Informations",
        links: footerInformationLinks
    },
    {
        title: "Réseaux",
        links: footerReseauLinks
    }

];