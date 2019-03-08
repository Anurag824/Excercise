import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component{
  state = {
    todos: [
      {id: 1,item: 'Play Badminton'},
      {id: 2,item: 'Play Cricket'}
    ]
  }
  deleteTodo =(id) => {
    //console.log(id);
    let todos = this.state.todos.filter( todo => {
      return todo.id !==id
    })
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos, todo];
  this.setState({
    todos
  })
}

componentDidMount(){
  console.log('Component Mounted');
}

componentDidUpdate(prevProps, prevState, snapshot){
  console.log('Component Updated');
  console.log(prevProps, prevState, snapshot);
}

  render() {
    return (
      <div className="App container">
      <h2 className="center red-text">My TODO's</h2>
      <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
