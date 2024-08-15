import "./styles.css";
import { content, loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

let last = document.querySelector("#home");
let functions = {
    home: loadHome,
    menu: loadMenu, 
    about: loadAbout,
}

function functionalizeBtns() {
    const buttons = document.querySelectorAll("button")

    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            cleanContent()
            functions[`${e.target.id}`]();
            last.classList.remove("act");
            e.target.setAttribute("class", "act");
            last = e.target;
        })
    }
}

function cleanContent() {
    content.textContent = ""
}

console.log("Hello, World!")
functionalizeBtns()
last.click()

