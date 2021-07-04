import { Items } from "types/localStorage";

function getFromLocalStorage<T = unknown>(nameItem: Items): T | null {
  const dataFromLocalStorage = localStorage.getItem(nameItem) || "";

  const isValidData =
    !!dataFromLocalStorage &&
    dataFromLocalStorage !== "undefined" &&
    dataFromLocalStorage !== "null" &&
    dataFromLocalStorage !== "{}" &&
    dataFromLocalStorage !== "[]" &&
    typeof dataFromLocalStorage === "string";

  if (!isValidData) {
    return null;
  }

  const parsedData = JSON.parse(dataFromLocalStorage);
  return parsedData;
}

export default getFromLocalStorage;
