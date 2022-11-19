import "./css"
import Root from "./Root.jsx";

function handleDomContentLoaded() {
  new Root()
}

document.addEventListener("DOMContentLoaded", handleDomContentLoaded)