import kebab from "./kebab.jpg"  
  
const content = document.querySelector("#content");


export let Functions = {
    home: () => {
    const title = document.createElement("h1");
    const subtitle = document.createElement("h3");
    const image = document.createElement("img");
    const text = document.createElement("p");

    title.textContent = "Kebab paradise!";
    subtitle.textContent = "Experience Best Kebab In Town For Astonishing Prices!";
    image.src = kebab;
    text.textContent = "Want to try our brand new kebab? No problem! Just come visit us at 'random address'! We are open 24/7 and love serving our customers best kebab in town! Only one as well! :)";

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(image);
    content.appendChild(text);   
    },
    main: () => {console.log("Main")}, 
    about: () => {console.log("About")},
}

export function cleanContent() {
    content.textContent = ""
}

