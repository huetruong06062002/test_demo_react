import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, //toggle
    });
  };

  render() {
    //destructuring
    const { listUsers } = this.props;

    //props => viết tắt properties
    return (
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <h1
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser ? "Hide list user:" : "show list user:"}
          </h1>
        </div>

        {this.state.isShowListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
