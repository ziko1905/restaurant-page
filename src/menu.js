import { content } from "./home.js";

export function loadMenu() {
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