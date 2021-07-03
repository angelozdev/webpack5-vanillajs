// components
import { CardList, Wrapper } from "./components";

// styles
import "normalize.css";
import "./styles/global.css";

async function App() {
  const cardList = await CardList();
  return Wrapper({ children: cardList });
}

export default App;
