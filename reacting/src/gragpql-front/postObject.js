import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    // graphql接口
    // text
    fetch('/graphql', {
      method: "post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/graphql',
        'Accept': 'application/json,text/plain,*/*'
      },
      body: "{getDie(numSides: 6){rollOnce,roll(numRolls: 3)}}"
    }).then(response => response.json())
      .then(result => {
        // 在此处写获取数据之后的处理逻辑
        console.log('text:',result);
      }).catch(function (e) {
        console.log("fetch fail");
      });

    // json

    
    
  
        
      var sides = 3;
      var rolls = 10;
      var query = `query getDie($sides: Int!, $rolls: Int!) {
        getDie(numSides: $sides) {
          rollOnce
          roll(numRolls: $rolls)
        }
      }`;
      fetch('/graphql', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { sides, rolls },
        })
      })
    .then(r => r.json())
    .then(data => console.log('json:', data));


  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
