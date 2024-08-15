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
    const dishDiv = document.createElement("div")
    const dishList = document.createElement("ul");

    div.className = "about"
    div.appendChild(title);
    title.textContent = "Our Menu!";
    for (let n = 0; n < 3; n++) {
        const currDiv = document.createElement("div");
        const currList = document.createElement("ul");
        currDiv.className = "list";
        currDiv.appendChild(currList)
        currDiv.textContent = ["Dishes: ", "Sizes: ", "Spices: "][n]
        for (let m of [["Kebab", "Kebab Salad", "Kebab Pizza", "Kebab Tortilla", "Kebab Spaghetti"], 
                       ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
                       ["Tabasco", "Hot Sauce", "Mild Sauce", "Pepperoni", "Onions"]][n]) {
            const li = document.createElement("li");
            li.textContent = m;
            currList.appendChild(li)
        }
        currDiv.append(currList)
        div.append(currDiv)
    }
    
    content.appendChild(div);
}

function loadAbout() {
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

export function cleanContent() {
    content.textContent = ""
}

