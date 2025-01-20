import React, { useState } from 'react';
    import TodoList from './TodoList';
    import TodoForm from './TodoForm';
    import LoginForm from './LoginForm';
    function App() {
      const [todos, setTodos] = useState([]);
      const [loggedIn, setLoggedIn] = useState(false);
      const addTodo = (text, dateTime, note) => {
        setTodos([...todos, { text, completed: false, dateTime, note }]);
      };
      const toggleComplete = (index) => {
        setTodos(
          todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo,
          ),
        );
      };
      const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
      };
      const handleLogin = (username, password) => {
        if (username === 'user' && password === 'password') {
          setLoggedIn(true);
          setTodos([
            {
              text: 'Buy groceries',
              completed: false,
              dateTime: new Date().toISOString(),
              note: 'Milk, eggs, bread',
            },
            {
              text: 'Pay bills',
              completed: false,
              dateTime: new Date().toISOString(),
              note: 'Electricity, internet',
            },
          ]);
        } else {
          alert('Invalid credentials');
        }
      };
      const handleLogout = () => {
        setLoggedIn(false);
        setTodos([]);
      };
      return (
        <div className="bg-light min-h-screen py-10">
          <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
            {loggedIn ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-dark text-center">
                    Todo App
                  </h1>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-700"
                  >
                    Logout
                  </button>
                </div>
                <TodoForm addTodo={addTodo} />
                <TodoList
                  todos={todos}
                  toggleComplete={toggleComplete}
                  removeTodo={removeTodo}
                />
              </>
            ) : (
              <LoginForm handleLogin={handleLogin} />
            )}
          </div>
        </div>
      );
    }
    export default App;
