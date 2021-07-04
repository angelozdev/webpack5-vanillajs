import { Items } from "types/localStorage";

interface Options {
  parse?: boolean;
}

function getFromLocalStorage<T = unknown>(
  nameItem: Items,
  { parse = true }: Options = {}
): T | string {
  const dataFromLocalStorage = localStorage.getItem(nameItem) || "";

  const isValidData =
    !!dataFromLocalStorage &&
    dataFromLocalStorage !== "undefined" &&
    dataFromLocalStorage !== "null" &&
    dataFromLocalStorage !== "{}" &&
    dataFromLocalStorage !== "[]" &&
    typeof dataFromLocalStorage === "string";

  if (!isValidData) {
    return "";
  }

  if (!parse && isValidData) {
    return dataFromLocalStorage;
  }
  const parsedData = JSON.parse(dataFromLocalStorage);
  return parsedData;
}

export default getFromLocalStorage;
