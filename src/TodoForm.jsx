import React, { useState } from 'react';
    function TodoForm({ addTodo }) {
      const [text, setText] = useState('');
      const [dateTime, setDateTime] = useState('');
      const [note, setNote] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
          addTodo(text, dateTime, note);
          setText('');
          setDateTime('');
          setNote('');
        }
      };
      return (
        <form onSubmit={handleSubmit} className="flex flex-col mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary-dark text-dark mb-2"
            placeholder="Add a todo..."
          />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary-dark text-dark mb-2"
          />
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary-dark text-dark mb-2"
            placeholder="Add a note..."
          />
          <button
            type="submit"
            className="px-5 py-3 bg-primary text-white rounded-md mt-2 hover:bg-primary-dark focus:ring-2 focus:ring-primary-dark"
          >
            Add
          </button>
        </form>
      );
    }
    export default TodoForm;
