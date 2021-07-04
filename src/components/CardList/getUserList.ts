import { getUsers, localStorageUtils } from "utils";
import { Options, User } from "types/response";

export async function getData(options?: Options): Promise<User[]> {
  const usersFromLocalStorage = localStorageUtils.getItem<User[]>("data");
  const optionsFromLocalStorage = localStorageUtils.getItem<Options>("options");

  if (
    usersFromLocalStorage &&
    JSON.stringify(optionsFromLocalStorage) === JSON.stringify(options)
  ) {
    return usersFromLocalStorage;
  }

  const users = await getUsers(options, (_, data) => {
    localStorageUtils.setItem("data", data);
    localStorageUtils.setItem("options", options);
  });

  return users;
}

export default getData;
