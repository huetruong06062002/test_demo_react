// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  // MyComponent kế thừa lại lớp Components của react

  //JSX: cho phép viết JS bên trong html
  render() {
    return (
      <div>
        My first component
        {Math.random()}
      </div>
    );
  }
}

export default MyComponent;
