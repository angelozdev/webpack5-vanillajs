import App from "./App";

function render() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("[INDEX] Missing root element");
  }

  root.innerHTML = App();
}

document.addEventListener("DOMContentLoaded", render);
