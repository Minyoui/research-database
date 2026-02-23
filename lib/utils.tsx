import { Route } from "next"

export const links = [
    {
        label: "Home",
        path: "/" satisfies Route,
    },
    {
        label: "Register",
        path: "/register" satisfies Route,
    },
    {
        label: "Login",
        path: "/login" satisfies Route,
    },
];

export const homeLink = [
    {
        label: "View Database",
        path: "/dashboard" satisfies Route,
    },
    {
        label: "About",
        path: "/about" satisfies Route,
    },
    {
        label: "Ask for Help",
        path: "/contact" satisfies Route,
    }
];