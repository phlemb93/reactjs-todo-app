import React, { Component } from 'react'

class AddTodo extends Component {


state = {
    content: "",
    id: ""
}
formValue = (e) => {
    this.setState({  
        content: e.target.value,
        id: Math.random()
    })
}
submitForm = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state);

    this.setState({
        content:""
    })
}

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.submitForm}>
            <input value={this.state.content} onChange={this.formValue} type="text" placeholder="Add Todo Here..." />
            <button>Add Todo</button>
        </form>  
      </div>
    )
  }
}

export default AddTodo;