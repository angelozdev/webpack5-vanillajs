import { User } from "types/response";
import { stringToHtml } from "../../utils";
import "./card.css";

function Card({ name, picture, phone, gender, registered }: User) {
  const view = `
    <li class="card__container">
      <figure class="card__avatar_container">
        <img
          loading="lazy"
          class="card__avatar"
          alt="${name.first} ${name.last}"
          src="${picture.large}"
        />
      </figure>
      <h1 class="card__title">
        ${name.first} ${name.last}
      </h1>

      <div class="card__details">
        <p>
          <strong>Phone: </strong><span>${phone}</span>
        </p>
        <p>
          <strong>Gender: </strong><span>${gender}</span>
        </p>
        <p>
          <strong>Age: </strong><span>${registered.age}</span>
        </p>
      </div>
    </li>
  `;

  return stringToHtml(view);
}

export default Card;
