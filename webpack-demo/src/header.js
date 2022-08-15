import { createHtmlElement } from "./index";

function render() {
const header = document.querySelector(".header");
const p = createHtmlElement(
    "p",
    null,
    ["silver"],
    "ToDo List"
);
header.insertBefore(p, header.firstElementChild);



}

export { render as renderHeader };