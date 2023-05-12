// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   // MyComponent kế thừa lại lớp Components của react
//   constructor(props) {
//     super(props);
//     //bable compliler
//     this.state = {
//       listUsers: [
//         { id: 1, name: "Hoi Dan IT", age: "16" },
//         { id: 2, name: "Eric", age: "26" },
//         { id: 3, name: "Henrry Phạm Dev", age: "69" },
//       ],
//     };
//   }

//   handleAddNewUser = (userObj) => {
//     // let listUsersNew = this.state.listUsers;
//     // listUsersNew.unshift(userObj);
//     // this.setState({
//     //   listUsers: listUsersNew,
//     // });

//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   //JSX: cho phép viết JS bên trong html
//   render() {
//     const myInfor = ["ab", "c", "d"];
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  let [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi Dan IT", age: "16" },
    { id: 2, name: "Eric", age: "26" },
    { id: 3, name: "Henrry Phạm Dev", age: "69" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
