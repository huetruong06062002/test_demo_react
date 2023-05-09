import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

//Viết theo kiểu class components
class App extends React.Component {
  state = {
    name: "Eric",
    address: "Hoi Dan IT",
    age: 21,
  };

  render() {
    return (
      <div>
        Hello Word!
        <MyComponent></MyComponent>
      </div>
    );
  }
}

//Viết theo kiểu function components
// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello word Hoi dan it</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

export default App;
