import { createRoot } from "react-dom/client";
import App from "./App";
import "./base.css";

document.body.innerHTML = '<div id="app"></div>';
createRoot(document.getElementById("app") as HTMLElement).render(<App />);

export default {};
