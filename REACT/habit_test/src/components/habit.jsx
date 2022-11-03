import React, { Component } from 'react';

class Habit extends Component {
  render() {
    const {onIncrement, onDecrement, onDelete, habit} = this.props;
    const {name, count} = this.props.habit;

    return (
      <li className='habit'>
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className='habit-button habit-increase' onClick={(event) => onIncrement(habit)}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className='habit-button habit-decrease' onClick={(event) => onDecrement(habit)}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className='habit-button habit-delete' onClick={(event) => onDelete(habit)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;