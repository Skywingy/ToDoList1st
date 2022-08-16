import { createHtmlElement } from "./index";
import { renderForm } from './form';

function render() {
const header = document.querySelector(".header");
const p = createHtmlElement(
    "p",
    null,
    ["silver"],
    "ToDo List"
);
header.insertBefore(p, header.firstElementChild);

renderForm();


}

export { render as renderHeader };