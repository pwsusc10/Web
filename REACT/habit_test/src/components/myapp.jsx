import React, { Component } from 'react';
import Addtext from './addtext';
import Habit from './habit';
import Headline from './headline';
import Reset from './reset';

class Myapp extends Component {
  state = {
    habit_total : 0,
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
    
    let total = 0;
    for (const item of habits){
      total = item.count + total;
    }
    console.log(total);
    this.setState({habit_total: total});
  };
  handleDecrement = habit =>{
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count = habits[index].count > 0 ? habits[index].count - 1 : 0;
    this.setState({haibts: habits});

    let total = 0;
    for (const item of habits){
      total = item.count + total;
    }
    console.log(total);
    this.setState({habit_total: total});
  };

  handleDelete = habit =>{
    console.log(habit);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    
    // 필터 사용하기
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});

    let total = 0;
    for (const item of habits){
      total = item.count + total;
    }
    console.log(total);
    this.setState({habit_total: total});
  };

  handleAdd = () => {
    const string = document.getElementById('addText').value;
    let habits = [...this.state.habits];
    const cnt = habits.length + 1;
    habits.push({id: cnt, name: string, count: 0});
    
    this.setState(this.state.habits = habits);
  }

  handleReset = () => {
    let habits = [...this.state.habits];
    habits = [];

    this.setState(this.state.habits = habits);
    let total = 0;
    for (const item of habits){
      total = item.count + total;
    }
    console.log(total);
    this.setState({habit_total: total});
  }
  render() {
    return (
    <>
      <Headline
        total = {this.state.habit_total}
      />
      <Addtext
      onAdd = {this.handleAdd}
      />
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
      <Reset
      onReset = {this.handleReset}
      />
    </>
    );
  }
}

export default Myapp;