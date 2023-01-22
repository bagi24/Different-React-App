import { useState, useEffect } from 'react';

export default function ToDo() {
  const [values, setValues] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState('post');

  console.log(todos);
  const updateTodo = (value, id) => {
    console.log(value, id);
    const newTodo = todos.map(todo => (todo.id === id ? { title: values, id: editTodo.id } : todo));

    setTodos(newTodo);

    setValues('');
    setEditText('post');
  };

  useEffect(() => {
    if (editTodo) {
      setValues(editTodo.title);
    } else {
      setValues('');
    }
  }, [setValues, editTodo]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!editTodo || editText === 'post') {
      const todo = {
        id: Math.floor(Math.random() * 100),

        title: values,

        completed: false,
      };

      setTodos([...todos, todo]);

      setValues('');
    } else {
      updateTodo(values, editTodo.id);

      console.log(editTodo.id);
    }
  };

  const handleDelte = id => {
    const deletes = todos.filter(item => item.id !== id);

    setTodos(deletes);
  };

  const handleEdit = ({ id }) => {
    console.log(id);
    if (editText === 'post') {
      const FindToDo = todos.find(todo => todo.id === id);

      setEditTodo(FindToDo);
    }
    setEditText('update');
  };

  const handleCheck = id => {
    const completed = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(completed);
  };

  return (
    <div className='APP'>
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' name='name' value={values} onChange={e => setValues(e.target.value)} />
        </label>
        <input
          style={{ color: 'white', backgroundColor: 'aqua' }}
          type='submit'
          value={editText}
          name='name'
        />
      </form>

      {todos.map(todo => (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <button onClick={() => handleDelte(todo.id)}>Delete</button>
          <button onClick={() => handleEdit(todo)}>Edit</button>
          <input
            onChange={() => handleCheck(todo.id)}
            type='checkbox'
            name='name'
            checked={todo.completed}
          />
        </div>
      ))}
    </div>
  );
}
