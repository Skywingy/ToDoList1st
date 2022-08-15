import { createHtmlElement } from "./index";

function render() {
const footer = document.querySelector(".footer");
const p = createHtmlElement(
    "p",
    null,
    ["golden"],
    "Developed with ♥ by Nyam-Erdene"
);
footer.appendChild(p);
}

export { render as renderFooter };