import App from "./App";
import { EnvironmentVariables } from "src/constants";

const { NODE_ENV } = EnvironmentVariables;

if (NODE_ENV.value === "development") {
  console.log("[MODE]", NODE_ENV.value);
}

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
    root.innerHTML = "[INDEX] Server Internal Error";
  }
}

document.addEventListener("DOMContentLoaded", render);
