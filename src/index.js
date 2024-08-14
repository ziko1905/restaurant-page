import "./styles.css";
import { Functions, cleanContent } from "./load.js";

let last = document.querySelector("#home");

function functionalizeBtns() {
    const buttons = document.querySelectorAll("button")

    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            cleanContent()
            Functions[`${e.target.id}`]();
            last.classList.remove("act");
            e.target.setAttribute("class", "act");
            last = e.target;
        })
    }
}

console.log("Hello, World!")
functionalizeBtns()