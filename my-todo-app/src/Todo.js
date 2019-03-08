import React from 'react';

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? todos.map( todo => {
    return (
      <div className='collection-item' key= {todo.id}>
      <span className='blue-text' onClick={() =>deleteTodo(todo.id)}>{todo.item}</span>
      </div>
    )
  }
  ) : (
      <p className='center red-text'> Yay! i dont understand anything T_T</p>
  )
  return (
    <div className='todos collection'>
      { todoList }
    </div>
  )
}

export default Todo;
