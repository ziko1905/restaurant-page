import kebab from "./kebab.jpg"  
  
export const content = document.querySelector("#content");

export function loadHome() {
    const div = document.createElement("div");
    const title = document.createElement("h1");
    const subtitle = document.createElement("h3");
    const image = document.createElement("img");
    const text = document.createElement("p");

    div.className = "home"
    title.textContent = "Kebab paradise!";
    subtitle.textContent = "Experience Best Kebab In Town For Astonishing Prices!";
    image.src = kebab;
    text.textContent = "Want to try our brand new kebab? No problem! Just come visit us at 'random address'! We are open 24/7 and love serving our customers best kebab in town! Only one as well! :)";

    div.appendChild(title);
    div.appendChild(subtitle);
    div.appendChild(image);
    div.appendChild(text);
    content.appendChild(div)
}


