import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    let id = Date.now();

    this.state = {

      items: [],
      current: {
        input: '',
        status: false,
        id: id
      }
    };

  }

  onSubmit = event => {
    event.preventDefault()

    this.setState({
      items: [
        ...this.state.items, {
          input: this.state.input,
          id: this.state.id,
          status: this.state.status
        }

      ],
      input: ""


    });


  };

  onChange = (event) => {
    this.setState({input: event.target.value})

  };

  render() {
    return (<div className="App">
      <TodoList items={this.state.items}/>
      <TodoForm items={this.state.input} onChange={this.onChange} handleClick={this.onSubmit}/>
    </div>);
  }
}

export default App;
