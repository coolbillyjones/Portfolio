import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set page title
document.title = "Dev Portfolio | 90s Style";

// Add meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'A 1990s retro-styled portfolio website to showcase coding projects';
document.head.appendChild(metaDescription);

// Add favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/x-icon';
favicon.href = '/favicon.ico';
document.head.appendChild(favicon);

// Add Google Fonts
const fontPreconnect1 = document.createElement('link');
fontPreconnect1.rel = 'preconnect';
fontPreconnect1.href = 'https://fonts.googleapis.com';
document.head.appendChild(fontPreconnect1);

const fontPreconnect2 = document.createElement('link');
fontPreconnect2.rel = 'preconnect';
fontPreconnect2.href = 'https://fonts.gstatic.com';
fontPreconnect2.crossOrigin = 'anonymous';
document.head.appendChild(fontPreconnect2);

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=VT323&display=swap';
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
