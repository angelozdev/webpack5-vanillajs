import { stringToHtml } from "../../utils";
import "./wrapper.css";

interface Props {
  children: string;
}

function Wrapper({ children }: Props) {
  const view = `
    <div class="wrapper__container">
      ${children}
    </div>
  `;

  return stringToHtml(view);
}

export default Wrapper;
