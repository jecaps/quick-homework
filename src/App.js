import { persons } from "./assets/persons";
import "./App.css";

import Person from "./components/Person";

function App() {
  const personElement = persons.map((person) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        image={person.image}
        status={person.status}
      />
    );
  });

  return <ul>{personElement}</ul>;
}

export default App;
