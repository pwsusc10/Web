import React, { Component } from 'react';

class Headline extends Component {
  render() {
    return (
      <div className='header'>
          <span className="head-icon">
            <i className="fa-solid fa-leaf"></i>
          </span>
          <span className="habit-name">Habit Tracker</span>
          <span className="habit-count">{this.props.total}</span>
      </div>
    );
  }
}

export default Headline;