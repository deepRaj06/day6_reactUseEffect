import React, { useEffect } from 'react'
import styles from './todos.module.css';

const Todos = () => {

const[todos, setTodos] = React.useState([]);
const[newTodo, setNewTodo] = React.useState([]);

const saveInfo = () => {
    // call api to save this information in backend

    fetch("http://localhost:8000/todos", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            value: newTodo,
            isCompleted: false,
        })
    })
      .then( (res) => res.json() )
      .then( (data) => {
        //   setTodos(data);
        console.log(data)
          setTodos([...todos, data]);
          setNewTodo('');
      })
    // setNewTodo('');
}

// Delete button 

const delInfo = () => {
  // call api to save this information in backend

  fetch("http://localhost:8000/todos", {
      method: 'PATCH',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify({
          value: newTodo,
          isCompleted: false,
      })
  })
    .then( (res) => res.json() )
    .then( (data) => {
      //   setTodos(data);
      console.log(data)
        setTodos([...todos, data]);
        setNewTodo('');
    })
  // setNewTodo('');
}


useEffect( () => {
    fetch('http://localhost:8000/todos')
    .then( (res) => res.json() )
    .then( (data) => {
      setTodos(data);  
      console.log(data);
    });
}, [])

  return (
    <div>
        Todos
        <div>
            <div>
            <input 
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={saveInfo}>+</button>
        </div>
        {todos.map( (todo) => (
                <div key={todo.id}>
                  {todo.value}
                  {/* <edit></edit> */}
                  {/* Delete button */}
                  <button 
                  className={styles.deleteBtn} 
                  onClick={delInfo}>
                    Delete
                  </button>

                </div>
            ))}
    </div>
  </div>
  )
}

export default Todos