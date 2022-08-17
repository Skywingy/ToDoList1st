import { content, createHtmlElement } from "./index";

const project = [

];

function render() {
const main = document.createElement("main");
main.classList.add("home");

const title = createHtmlElement("h1", null, ["gray"], "PROJECT");


main.appendChild(title);


project.forEach((item) => {
    const div = createHtmlElement("div", null, ["menu-item"], null);

    const name = createHtmlElement("h2", null, ["golden"], item.name);
    const description = createHtmlElement(
    "p",
    null,
    ["gray"],
    item.description
    );
    const price = createHtmlElement("h2", null, ["golden"], item.price);
    const hr = createHtmlElement("hr", null, ["menu-hr"], null);

    div.appendChild(name);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(hr);

    main.appendChild(div);
});

content.appendChild(main);
}

export { render as renderProject };