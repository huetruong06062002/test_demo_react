import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowListUser, setShowListUser] = useState(true);

  const handleShowListUser = () => {
    setShowListUser(!isShowListUser);
  };

  console.log(">>> call me render");

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title = "Eric & Hoi dan it";
  //   }, 3000);
  //   console.log(">>> call me useEffect");
  // }, []);

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You have 0 users");
    }
    console.log(">>> call me useEffect");
  }, [listUsers]);

  // Tham số thứ 2 ko truyền gì vào sẽ là componentDidMount, truyền vào là
  //ComponentDidUpdate

  return (
    <div className="display-infor-container">
      <div>
        <h1
          onClick={() => {
            handleShowListUser();
          }}
        >
          {isShowListUser ? "show list user" : "hide list user"}
        </h1>
      </div>
      {isShowListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <hr />
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
