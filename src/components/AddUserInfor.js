import React, { useEffect, useState } from "react";

const AddUserInfor = (props) => {
  const state = {
    name: "",
    address: "Hoi Dan IT",
    age: "",
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("Hoi Dan IT");
  const [age, setAge] = useState("");

  const hanleOnChangeAge = (event) => {
    //bad code: this.state.age = event.target.value
    setAge(event.target.value);
  };

  const hanleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); // ngăn chặn submit
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  console.log(">>> call me render");

  useEffect(() => {
    setTimeout(() => {
      document.title = "Eric & Hoi dan it";
    }, 3000);
    console.log(">>> call me useEffect");
  }, []);

  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            hanleOnChangeInput(event);
          }}
        />
        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            hanleOnChangeAge(event);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
