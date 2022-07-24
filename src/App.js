import React, { Component } from 'react'
import Todos from './Todos.js'
import AddTodo from './AddTodo.js'


class App extends Component {


  state = {
    todos: [
      {id: 1, content:'I want to read book'},
      {id: 2, content:'I want to code'}
    ]
  }

  addTodo = (todo) => {

 this.setState({
   todos: [...this.state.todos, todo]
 })
    
}

deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return (
      todo.id !== id
    )
  });
  this.setState({
    todos
  })
}

  render() {

    return (
      <div className='container'>
        <h1>My Todo App</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;