import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {
        var id = 'a';
        var query = `query User($id: String!) {
            user(id: $id){
                id,
                name
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
                variables: {
                    id
                },
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

export default App;
