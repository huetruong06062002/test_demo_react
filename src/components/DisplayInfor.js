import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>>> Constructor: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>>> ComponentDidMount: 3");
    setTimeout(() => {
      document.title = "HoidanIT";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>>> ComponentDidUpdate: 4", this.props, prevProps);
    if (
      this.props.listUsers != prevProps.listUsers &&
      this.props.listUsers.length == 5
    ) {
      alert("You have 5 members");
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, //toggle
    });
  };

  render() {
    //destructuring
    console.log(">>> Render : 2");
    const { listUsers } = this.props;

    //props => viết tắt properties
    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
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
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}

export default DisplayInfor;
