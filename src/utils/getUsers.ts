import axios from "axios";
import { Response, User, Nat } from "../../types/response";

interface Options {
  results?: number;
  gender?: "female" | "male";
  nat?: Nat;
  page?: number;
}

function getFromLocalStorage<T>(nameItem: string) {
  const dataFromLocalStorage = localStorage.getItem(nameItem) || "null";
  return JSON.parse(dataFromLocalStorage) as T;
}

async function getUsers(options: Options = {}): Promise<User[]> {
  try {
    const dataFromLocalStorage = getFromLocalStorage<Response>("data");

    const optionsFromLocalStorage = JSON.stringify(
      getFromLocalStorage<Options>("options")
    );

    if (
      dataFromLocalStorage &&
      optionsFromLocalStorage === JSON.stringify(options)
    ) {
      return dataFromLocalStorage.results;
    }

    const { results, gender, nat, page } = options;
    const params = { results, gender, nat, page };
    const { data } = await axios.get<Response>("https://randomuser.me/api/", {
      params,
    });

    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("options", JSON.stringify(options));

    return data.results;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export default getUsers;
