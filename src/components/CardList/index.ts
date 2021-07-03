import { Card } from "../";
import { stringToHtml } from "src/utils";
import { getData } from "./getUserList";
import "./cardList.css";

async function CardList() {
  const users = await getData({ results: 10 });

  if (!users.length) {
    return "<p>There are no users.</p>";
  }

  const view = `
    <ul class="card_list__container">
      ${users.map((user) => Card(user)).join("")}
    </ul>
  `;

  return stringToHtml(view);
}

export default CardList;
