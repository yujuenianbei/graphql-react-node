import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    // // graphql接口
    // fetch('/graphql', {
    //   method: "post",
    //   mode: "cors",
    //   headers: {
    //     'Content-Type': 'application/graphql',
    //     'Accept': 'application/json,text/plain,*/*'
    //   },
    //   body: "{ quoteOfTheDay,random, rollThreeDice }"
    // }).then(response => response.json())
    //   .then(result => {
    //     // 在此处写获取数据之后的处理逻辑
    //     console.log(result);
    //   }).catch(function (e) {
    //     console.log("fetch fail");
    //   });


      var dice = 3;
      var sides = 10;
      var query = `query RollDice($dice: Int!, $sides: Int) {
        rollDice(numDice: $dice, numSides: $sides)
      }`;


      var json = {
        "query":"query RollDice($dice: Int!, $sides: Int) {rollDice(numDice: $dice, numSides: $sides) }",
        "variables":{"dice":3,"sides":10}
      }
      
      fetch('/graphql', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { dice, sides },
        })
      })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));


    // 普通接口
    // fetch('http://localhost:8000/api/1', {
    //   method: "post",
    //   mode: "cors",
    //   headers: {
    //     'Accept': 'application/json,text/plain,*/*'
    //   },
    //   body: JSON.stringify({ query: 123 })
    // }).then(response => response.text())
    //   .then(result => {
    //     // 在此处写获取数据之后的处理逻辑
    //     console.log(result);
    //   }).catch(function (e) {
    //     console.log("fetch fail");
    //   });



  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
