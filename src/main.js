import "./css"
import App from "./App.jsx";

function handleDomContentLoaded() {
  new App()
}

document.addEventListener("DOMContentLoaded", handleDomContentLoaded)