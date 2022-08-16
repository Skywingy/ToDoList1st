import _, { add } from 'lodash';
import { compareAsc, format } from 'date-fns'
import { renderNav } from "./navbar";
import { renderFooter } from './footer';
import { renderHeader } from './header';
import { renderForm } from './form';
import { renderContent } from './content';
import { renderHome } from './home';
import { renderToday } from './today';
import { renderProject } from './project';
import { renderWeekend } from './weekend';
import './style.css';


const content = document.querySelector(".lists");






function createHtmlElement(type, id, arrayClasses, content) {
const element = document.createElement(type);
if (id) element.id = id;
if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

if (content) element.innerText = content;

return element;
}

function def() {
    content.innerHTML = "";
    renderNav();
    renderHeader();
    renderFooter();
    
}
function home() {
    content.innerHTML = "";
    renderHome();
}

function today() {
    content.innerHTML = "";
    renderToday();
}

function weekend() {
    content.innerHTML = "";
    renderWeekend();
}

function project() {
    content.innerHTML = "";
    renderProject();
}

def();
home();



document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "HOME") home();
    if (target === "TODAY")today();
    if (target === "WEEKEND") weekend();
    if (target === "PROJECT") project();
});


export { content, createHtmlElement };
