interface Props {
  children: string;
}

function Card({ children }: Props) {
  const view = `<h1>${children}</h1>`;

  return view;
}

export default Card;
