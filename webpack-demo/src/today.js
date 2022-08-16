import { content, createHtmlElement } from "./index";

const today = [
{
    name: "Chicken Ramen",
    description:
    "Easy homemade chicken ramen, with a flavorful broth, roasted chicken, fresh veggies, lots of noodles, and a soft cooked egg. Inspired by traditional Japanese ramen, but on the table in under an hour.",
    price: "20$",
},
{
    name: "Pinch of Yum",
    description:
    "Take the usual ramen up a notch with this quick homemade ramen. Fresh veggies and herbs make this extra delicious, healthy, and cozy!",
    price: "20$",
},
{
    name: "Kimchi Ramen",
    description:
    "Kimchi is an essential ingredient in Asian culture. In essence, it is fermented vegetables that add so much flavor to any dish!",
    price: "20$",
},
];

function render() {
const main = document.createElement("main");
main.classList.add("main");

const bienvenidos = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Ichiraku"
);

const title = createHtmlElement("h1", null, ["gray"], "TODAY");

const hr = document.createElement("hr");

main.appendChild(bienvenidos);
main.appendChild(title);
main.appendChild(hr);

today.forEach((item) => {
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

export { render as renderToday };