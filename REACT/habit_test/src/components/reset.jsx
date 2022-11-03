import React, { Component } from 'react';

class Reset extends Component {
  render() {
    const {onReset} = this.props;
    return (
      <button className="reset_button" onClick={onReset}>
        Reset All
      </button>
    );
  }
}

export default Reset;