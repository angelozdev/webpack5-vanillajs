import { Items } from "types/localStorage";

function setItemToLocalStorage<T>(name: Items, data: T): void {
  localStorage.setItem(name, JSON.stringify(data));
}

export default setItemToLocalStorage;
