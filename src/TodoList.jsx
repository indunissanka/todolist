import React from 'react';
    function TodoList({ todos, toggleComplete, removeTodo }) {
      return (
        <ul className="list-none">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-3 p-3 bg-light rounded-md shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  className="mr-3 h-5 w-5 text-primary focus:ring-primary-dark rounded border-gray-300"
                />
                <div>
                  <span
                    className={`text-dark block ${
                      todo.completed ? 'line-through text-dark-gray' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                  {todo.dateTime && (
                    <span className="text-sm text-dark-gray block">
                      {new Date(todo.dateTime).toLocaleString()}
                    </span>
                  )}
                  {todo.note && (
                    <span className="text-sm text-dark-gray block">
                      {todo.note}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md focus:ring-2 focus:ring-red-700"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      );
    }
    export default TodoList;
