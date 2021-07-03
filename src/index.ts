import App from "./App";

async function render() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("[INDEX] Missing root element");
  }
  root.innerHTML = "Loading...";
  root.innerHTML = await App();
}

document.addEventListener("DOMContentLoaded", render);
