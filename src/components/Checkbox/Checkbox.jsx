import React, { Component } from 'react';

class Checkbox extends Component {
  state = {
    license: false,
  };

  onChangeHandler = event => {
    const { checked } = event.currentTarget;
    this.setState({
      license: checked,
    });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="experience"
          value="junior"
          onChange={this.onChangeHandler}
          checked={this.state.license}
        />
        Agree
      </div>
    );
  }
}

export default Checkbox;
