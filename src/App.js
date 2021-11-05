import "./App.css";
import Card from "./components/card";

const cards = [];
for (let i = 1; i <= 32; i++) {
  cards.push(<Card index={i} />);
}

function App() {
  return <div className="App">{cards}</div>;
}

export default App;
