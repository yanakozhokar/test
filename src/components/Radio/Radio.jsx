import React, { Component } from 'react';

class Radio extends Component {
  state = {
    experience: 'junior',
  };

  onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="radio"
          name="experience"
          value="junior"
          onChange={this.onChangeHandler}
          checked={this.state.experience === 'junior'}
        />
        Junior
        <input
          type="radio"
          name="experience"
          value="middle"
          onChange={this.onChangeHandler}
          checked={this.state.experience === 'middle'}
        />
        Middle
        <input
          type="radio"
          name="experience"
          value="senior"
          onChange={this.onChangeHandler}
          checked={this.state.experience === 'senior'}
        />
        Senior
      </div>
    );
  }
}

export default Radio;
