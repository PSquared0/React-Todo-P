

import React, {Component}  from 'react';
import TodoList from './TodoList';

class TodoForm extends Component {
  constructor(props) {
    super(props)


  }

  render() {
  return (
    <form>
     <h1>Pascale's ToDos!!!</h1>
     <input placeholder="enter todo" value={this.props.items} onChange={this.props.onChange}/>
     <button onClick = {event => this.props.handleClick(event)}> submit</button>
     <button > clear</button>
    </form>

);
}}




export default TodoForm;
