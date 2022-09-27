import { persons } from "./assets/persons";
import "./App.css";

import ListItem from "./components/ListItem";

function App() {
  const listItemElement = persons.map((person) => {
    return (
      <ListItem
        key={person.id}
        name={person.name}
        image={person.image}
        status={person.status}
      />
    );
  });

  return (
    <>
      <ul>{listItemElement}</ul>
    </>
  );
}

export default App;
