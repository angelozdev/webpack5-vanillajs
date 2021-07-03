import { Items } from "types/localStorage";

interface Options {
  stringify?: boolean;
}

function getFromLocalStorage<T = unknown>(
  nameItem: Items,
  { stringify = true }: Options = {}
): T | null {
  const dataFromLocalStorage = localStorage.getItem(nameItem);

  if (!dataFromLocalStorage) return null;
  if (!stringify && dataFromLocalStorage) {
    return dataFromLocalStorage as T | any;
  }
  const parsedData = JSON.parse(dataFromLocalStorage);
  if (!parsedData) return null;

  return parsedData;
}

export default getFromLocalStorage;
