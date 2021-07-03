import App from "./App";

async function render() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("[INDEX] Missing root element");
  }

  root.innerHTML = "Loading...";

  try {
    const app = await App();
    root.innerHTML = app;
  } catch (error) {
    console.error(error);
    root.innerHTML = "[ERROR] Server Internal Error";
  }
}

document.addEventListener("DOMContentLoaded", render);
