import React, { Component } from 'react';
import Linker from './LinkButton'
import Main from './Main'
class App extends Component {
  render() {
    return (
      <div>
        <Linker />
        <Main />
      </div>
    );
  }
}

export default App;
