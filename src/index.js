import "./styles.css";
import { Functions, cleanContent } from "./load.js";

function functionalizeBtns() {
    const buttons = document.querySelectorAll("button")

    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            cleanContent()
            Functions[`${e.target.id}`]()
        })
    }
}
console.log("Hello, World!")
functionalizeBtns()