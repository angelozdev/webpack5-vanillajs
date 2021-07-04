import { Card } from "components";
import { getData } from "./getUserList";
import "./cardList.css";

async function CardList() {
  const users = await getData({ results: 9 });

  if (!users.length) {
    return "<p>There are no users.</p>";
  }

  const view = `
    <ul class="card_list__container">
      ${users.map((user) => Card(user)).join("")}
    </ul>
  `;

  return view;
}

export default CardList;
