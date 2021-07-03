// components
import { Card, Wrapper } from "./components";

// styles
import "normalize.css";
import "./styles/global.css";

function App() {
  const card = Card({ children: "Hola mundo" });
  return Wrapper({ children: card });
}

export default App;
