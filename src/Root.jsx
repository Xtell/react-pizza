import { ReactDemo } from "./components/index.js";
import ReactDOM from "react-dom";
import App from "./App.jsx";
export default class Root {
  els = {
    root: "[data-js-root]"
  }

  constructor() {
    this.rootElement = document.querySelector(this.els.root)
    if (this.rootElement) {
      this.root = ReactDOM.createRoot(this.rootElement)
      this.render()
    }
  }

  render() {
    this.root.render(<App/>)
  }
}