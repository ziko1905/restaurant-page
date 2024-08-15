import { content } from "./home.js"

export function loadAbout() {
    const div = document.createElement("div");
    const title = document.createElement("h1");

    div.className = "about"
    title.textContent = "Contact: ";
    div.appendChild(title);

    for (let n = 0; n < 3; n++) {
        const card = document.createElement("div");
        const name = document.createElement("h2");
        const number = document.createElement("h4");
        const role = document.createElement("h4");

        card.className = "card"
        name.textContent = ["Kebaoman", "Kebabochef", "Kebabotas"][n]
        number.textContent = ["314-159-2653", "271-282-1828", "141-142-1356"][n]
        role.textContent = ["Our awesome manager!", "Our talented chef!", "Our favorite customer!"][n]

        card.appendChild(name);
        card.appendChild(number);
        card.appendChild(role);
        div.appendChild(card);
    }

    content.appendChild(div)
}