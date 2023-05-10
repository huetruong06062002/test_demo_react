import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "Hoi Dan IT",
    age: "",
  };

  // handleClick = (event) => {
  //   console.log(">> Click me my button");
  //   console.log("My name is ", this.state.name);
  //   this.setState({
  //     name: "Eric1",
  //     age: Math.floor(Math.random() * 100) + 1,
  //   });
  // };

  // handleOnMoverOver(event) {
  //   console.log(event.pageX);
  // }

  hanleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  hanleOnChangeAge = (event) => {
    //bad code: this.state.age = event.target.value

    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // ngăn chặn submit
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        {" "}
        My name is {this.state.name} and I'm {this.state.age}
        {/* <button onMouseOver={this.handleOnMoverOver}>Hover me</button> */}
        {/* <button
      onClick={(event) => {
        this.handleClick(event);
      }}
    >
      Click me
    </button> */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.hanleOnChangeInput(event);
            }}
          />
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.hanleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
