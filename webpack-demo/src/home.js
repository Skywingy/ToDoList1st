import { content, createHtmlElement } from "./index";
import { renderForm } from "./form";



const home = [
{
    name: "",
    description:
    "",
    price: "",
},
{
    name: "",
    description:
    "",
    price: "",
},
{
    name: "",
    description:
    "",
    price: "",
},
];

function render() {
const main = document.createElement("main");
main.classList.add("home");



const title = createHtmlElement("h1", null, ["gray"], "Home");


main.appendChild(title);

home.forEach((item) => {
    const div = createHtmlElement("div", null, ["home-item"], null);

    const name = createHtmlElement("h2", null, ["golden"], item.name);
    const description = createHtmlElement("p", null, ["gray"], item.description);
    const price = createHtmlElement("h2", null, ["golden"], item.price);
    const hr = createHtmlElement("hr", null, ["home-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
});

content.appendChild(main);
}

export { render as renderHome };