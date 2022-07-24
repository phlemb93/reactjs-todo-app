import React from 'react'

function Todos({ todos, deleteTodo }) {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
            <div onClick= {() => {deleteTodo(todo.id)}} className="todo-item" key={todo.id}>
                <div>{todo.content}</div>
            </div>
            )
        })
    ) : (
        <div>No More Todos</div>
    )
    
    return (
        <div>{todoList}</div>
    )
}

export default Todos;