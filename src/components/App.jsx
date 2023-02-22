import React, { Component } from 'react';
import Radio from './Radio/Radio';
import Checkbox from './Checkbox/Checkbox';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Radio />
        <Checkbox />
      </div>
    );
  }
}

export default App;
