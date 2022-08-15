import { createHtmlElement } from "./index";

function render() {
const navItems = ["home", "today", "weekend", "project"];
const ul = document.querySelector(".nav");

navItems.forEach((item) =>
    ul.appendChild(createHtmlElement("li", null, null, item))
);
}

export { render as renderNav };