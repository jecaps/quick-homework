import { persons } from "./assets/persons";
import "./App.css";

function App() {
  return (
    <>
      <ul>
        <li>
          <img src={persons[0]["image"]} alt={persons[0]["name"]} />
          <h3>{persons[0]["name"]}</h3>
        </li>
      </ul>
    </>
  );
}

export default App;
