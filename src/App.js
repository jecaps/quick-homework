// import { persons } from "./assets/persons";
import { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Person from "./components/Person";

function App() {
  const [persons, setPersons] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    async function getPersons() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?status=${status}`
      );

      const data = await response.json();
      console.log(data);
      setPersons(data.results);
    }
    getPersons();
  }, [status]);

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

  return (
    <>
      <Form setStatus={setStatus} />
      <ul>{personElement}</ul>
    </>
  );
}

export default App;
