import _, { add } from 'lodash';
import { compareAsc, format } from 'date-fns'
import { renderNav } from "./navbar";
import { renderFooter } from './footer';
import { renderHeader } from './header';
import { renderForm } from './form';
import { renderContent } from './content';
import './style.css';



function createHtmlElement(type, id, arrayClasses, content) {
const element = document.createElement(type);
if (id) element.id = id;
if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));

if (content) element.innerText = content;

return element;
}


renderContent();
renderNav();
renderFooter();
renderHeader();
renderForm();

export { createHtmlElement };
