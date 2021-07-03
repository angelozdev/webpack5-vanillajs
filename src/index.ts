import App from "./App";

async function render() {
  console.log(process.env.NODE_ENV);
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
    root.innerHTML = "[INDEX] Server Internal Error";
  }
}

document.addEventListener("DOMContentLoaded", render);
