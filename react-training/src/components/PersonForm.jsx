import React, { useContext, useState } from "react";
// import { themeContext } from "./Parent";

const PersonForm = () => {
  // const values = useContext(themeContext);
  console.log(values);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const printFirstName = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };

  return (
    <div>
      <form>
        FirstName : <input type="text" onChange={printFirstName} /> <br />
        {firstName}
        <br />
        LastName:{" "}
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />{" "}
        {lastName}
        <br />
        <br />
        Age :{" "}
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />{" "}
        <br />
        {age}
        <br />
      </form>
    </div>
  );
};

export default PersonForm;
