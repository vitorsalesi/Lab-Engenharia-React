import { useState } from "react";

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  function handleFirstName(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }
  function handleLastName(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }
  function handleEmail(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }
  return (
    <div className="limite">
      <label>
        First name: <input value={person.firstName} onChange={handleFirstName}/><br></br>
      </label>
      <label>
        Last name: <input value={person.lastName} onChange={handleLastName} /><br></br>
      </label>
      <label>
        Email: <input value={person.email} onChange={handleEmail} /><br></br>
      </label>
      <p>
        {person.firstName} {person.lastName} {person.email}{" "}
      </p>
    </div>
  );
}
