// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // MyComponent kế thừa lại lớp Components của react
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: "16" },
      { id: 2, name: "Eric", age: "26" },
      { id: 3, name: "Henrry Phạm Dev", age: "69" },
    ],
  };
  //JSX: cho phép viết JS bên trong html
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <UserInfor />
        <DisplayInfor
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        />
      </div>
    );
  }
}

export default MyComponent;
