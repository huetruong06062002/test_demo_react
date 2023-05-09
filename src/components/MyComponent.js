// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  // MyComponent kế thừa lại lớp Components của react

  state = {
    name: "Eric",
    address: "Hoi Dan IT",
    age: 26,
  };

  handleClick = (event) => {
    console.log(">> Click me my button");
    console.log("My name is ", this.state.name);
    this.setState({
      name: "Eric1",
      age: Math.floor(Math.random() * 100) + 1,
    });
  };

  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  hanleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault(); // ngăn chặn submit
    console.log(this.state);
  };

  //JSX: cho phép viết JS bên trong html
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        {/* <button onMouseOver={this.handleOnMoverOver}>Hover me</button> */}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.hanleOnChangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
