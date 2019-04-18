import React, { Component } from 'react';

class PostArgument extends Component {
    componentDidMount() {
        var dice = 3;
        var sides = 10;
        var query = `query RollDice($dice: Int!, $sides: Int) {
        rollDice(numDice: $dice, numSides: $sides)
      }`;

        fetch('/graphql', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            /*
            可以使用json格式的传入方式　
             'Content-Type': 'application/json',
            var json = {
                "query":"query RollDice($dice: Int!, $sides: Int) {rollDice(numDice: $dice, numSides: $sides) }",
                "variables":{"dice":3,"sides":10}
            }

            也可以使用text格式的传入方式　直接将参数进行固定
            'Content-Type': 'application/graphql',
            body: "{rollDice(numDice: 2, numSides: 5)}"
            */
            body: JSON.stringify({
                query,
                variables: { dice, sides },
            })
        })
            .then(r => r.json())
            .then(data => console.log('data returned:', data));
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

export default PostArgument;
