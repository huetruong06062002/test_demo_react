// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // MyComponent kế thừa lại lớp Components của react

  //JSX: cho phép viết JS bên trong html
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="Hoi Dan IT" age="30 " />
        <DisplayInfor name={"Eric"} age={58} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponent;
