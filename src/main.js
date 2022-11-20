import "./css"
import Root from "./Root.jsx";
import 'virtual:svg-icons-register'

function handleDomContentLoaded() {
  new Root()
}

document.addEventListener("DOMContentLoaded", handleDomContentLoaded)