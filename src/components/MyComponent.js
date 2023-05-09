// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
  // MyComponent kế thừa lại lớp Components của react

  //JSX: cho phép viết JS bên trong html
  render() {
    return (
      <div>
        <UserInfor />
      </div>
    );
  }
}

export default MyComponent;
