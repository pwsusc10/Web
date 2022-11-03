import React, { Component } from 'react';

class Addtext extends Component {
  render() {
    const {onAdd} = this.props;
    return (
      <div className='add'>
        <input type="text" id='addText' className="addhabit" placeholder='Habit' height='30' required />
        <button className="add_button" onClick={onAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default Addtext;