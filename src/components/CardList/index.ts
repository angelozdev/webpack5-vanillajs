import { Card } from "../";
import { getUsers, stringToHtml } from "../../utils";
import "./cardList.css";

async function CardList() {
  const users = await getUsers({ results: 6 });

  const view = `
    <ul class="card_list__container">
      ${users.map((user) => Card(user)).join("")}
    </ul>
  `;

  return stringToHtml(view);
}

export default CardList;
