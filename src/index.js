import "./styles.css";
import { functions, cleanContent } from "./load.js";

function functionalizeBtns() {
    const buttons = document.querySelectorAll("button")

    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            functions[`${e.target.id}`]()
        })
    }
}
console.log("Hello, World!")
loadHome()