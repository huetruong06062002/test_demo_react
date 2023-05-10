// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
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

  handleAddNewUser = (userObj) => {
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  //JSX: cho phép viết JS bên trong html
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <DisplayInfor listUsers={this.state.listUsers} />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
