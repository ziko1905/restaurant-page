import kebab from "./kebab.jpg"  
  
const content = document.querySelector("#content");


export let Functions = {
    home: loadHome,
    menu: loadMenu, 
    about: loadAbout,
}

function loadHome() {
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

function loadMenu() {
    const div = document.createElement("div");
    const title = document.createElement("h1");
    const dishList = document.createElement("ul");
    const text = document.createElement("p");

    div.className = "about"
    title.textContent = "Our Menu!";
    for (let n of ["Kebab", "Kebab Salad", "Kebab Pizza", "Kebab Tortilla", "Kebab Spaghetti"]) {
        const dish = document.createElement("li");
        dish.textContent = n;
        dishList.appendChild(dish)
    }
    text.textContent = "Want to try our brand new kebab? No problem! Just come visit us at 'random address'! We are open 24/7 and love serving our customers best kebab in town! Only one as well! :)";

    div.appendChild(title);
    div.appendChild(dishList);
    div.appendChild(text);
    content.appendChild(div)
}

function loadAbout() {
    const div = document.createElement("div");
    const title = document.createElement("h1");
    const subtitle = document.createElement("h3");
    const image = document.createElement("img");
    const text = document.createElement("p");

    div.className = "about"
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

export function cleanContent() {
    content.textContent = ""
}

