import { Options, User } from "types/response";
import { Card } from "../";
import { getUsers, localStorageUtils, stringToHtml } from "../../utils";
import "./cardList.css";

const getData = async (options?: Options) => {
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
};

async function CardList() {
  const users = await getData({ results: 3 });

  if (!users.length) {
    return "There are no users.";
  }

  const view = `
    <ul class="card_list__container">
      ${users.map((user) => Card(user)).join("")}
    </ul>
  `;

  return stringToHtml(view);
}

export default CardList;
