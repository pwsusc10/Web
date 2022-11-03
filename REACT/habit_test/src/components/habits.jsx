import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits : [
      { id: 1, name : 'Reading', count : 0},
      { id: 2, name : 'Runnning', count : 0},
      { id: 3, name : 'coding', count : 0},
    ],
  };
  handleIncrement = habit =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits: habits});
  };
  handleDecrement = habit =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count > 0 ? habits[index].count - 1 : 0;
    this.setState({haibts: habits});
  };

  handleDelete = habit =>{
    console.log(habit);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    
    // 필터 사용하기
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };
  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit 
          key = {habit.id} 
          habit = {habit} 
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}/>
        ))}
      </ul>
    );
  }
}

export default Habits;