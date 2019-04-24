import React, { Component } from "react";
import "./App.css";
import Web3 from "web3";
import { Eth } from "web3-eth";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546", null, {});
const eth = new Eth(Web3.givenProvider || "ws://localhost:8546", null, {});
web3.eth.getAccounts().then((result) => {
  // console.log(result[0]);
  console.log(web3.eth.getBalance(result[0]));
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
