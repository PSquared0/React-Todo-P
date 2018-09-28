// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';

const TodoList = props =>  {
  return(
  props.items.map((item, index) => <li key={index}>{item.input}</li>)
)};


export default TodoList;
