import calculator from "../../assets/calculator.jpeg";
import toppicks from "../../assets/toppicks_tech.jpg";
import portfolio from "../../assets/portfolio.jpeg";
const ProjectsData = [
    {
        id: 1,
        img: portfolio,
        title: "My Dev Portfolio : Front-End (React.js)",
        description: "A fully responsive and theme-adaptive developer portfolio built with React, designed to showcase projects, skills, and personality with elegance and precision. It features dynamic light/dark theme switching powered by system preferences or manual selection—user settings are stored locally to ensure a personalized experience on every visit.",
        p1: "Built with React and structured using React Router DOM for seamless multi-page navigation",
        p2: "Theme intelligence: Syncs with system/browser preferences, while allowing manual toggle and saving user choice",
        p3: "Designed to be minimal, clean, and modular—perfect for scaling as new projects are added",
        p4: "Optimized for clarity, accessibility, and developer identity",
        btn: ""
    },
    {
        id: 2,
        img: calculator,
        title: "Scientific Calculator : Full-Stack",
        description: "A responsive, browser-based scientific calculator built with HTML, CSS, and JavaScript, backed by a lightweight Flask server. Designed to handle advanced mathematical operations in a sleek, minimal UI. Server is hosted on Render’s free tier, which may occasionally affect load speed or availability—but the functionality shines when it's up.",
        p1: "Support for trigonometric, logarithmic, exponential, and arithmetic operations",
        p2: "Real-time input validation and dynamic display",
        p3: "Clean, intuitive design built for accessibility and simplicity",
        p4: "Ideal for developers seeking a quick demo of client-server interaction using Flask",
        btn: "https://gauravheera.github.io/calculator_flaskApp/"
    },
    {
        id: 3,
        img: toppicks,
        title: "TopPicks Tech : Front-End (Vanilla JavaScipt - Utility First)",
        description: "A sleek, interactive demo of a modern tech-focused and responsive e-commerce product cards, built entirely with HTML, CSS, and JavaScript—no frameworks, no libraries. It showcases a utility-first JavaScript architecture, where every UI component and section is programmatically generated and injected into the DOM.",
        p1: "Fully modular structure with reusable component functions",
        p2: "JavaScript-driven layout for headers, product cards, testimonials, and calls-to-action",
        p3: "Lightweight styling using pure CSS (no external tools like Tailwind or Bootstrap)",
        p4: "Ideal for demonstrating vanilla JS mastery and clean UI logic without external dependencies",
        btn: "https://gauravheera.github.io/toppicks_tech/"
    }
];

export default ProjectsData;

// Reusable Format
// {
//         id: ,
//         img: "",
//         title: "",
//         description: "",
//         p1: "",
//         p2: "",
//         p3: "",
//         p4: "",
//         btn: ""
//     }