import { getUsers, localStorageUtils } from "utils";
import { Options, User } from "types/response";

export async function getData(options?: Options) {
  const usersFromLocalStorage = localStorageUtils.getItem<User[]>("data");
  const optionsFromLocalStorage = localStorageUtils.getItem<string>("options", {
    stringify: false,
  });

  if (
    usersFromLocalStorage &&
    optionsFromLocalStorage === JSON.stringify(options)
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
