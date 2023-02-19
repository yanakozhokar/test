import React, { Component } from 'react';

class Checkbox extends Component {
  state = {
    experience: 'junior',
  };

  render() {
    return (
      <div>
        <input
          type="radio"
          name="experience"
          value="junior"
          checked={this.state.experience === 'junior'}
        />
        Junior
        <input
          type="radio"
          name="experience"
          value="middle"
          checked={this.state.experience === 'middle'}
        />
        Middle
        <input
          type="radio"
          name="experience"
          value="senior"
          checked={this.state.experience === 'senior'}
        />
        Senior
      </div>
    );
  }
}

export default Checkbox;
