import React, { useState } from 'react';
    function LoginForm({ handleLogin }) {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
      };
      return (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl font-bold text-dark mb-4 text-center">
            Login
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary-dark text-dark mb-2"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary-dark text-dark mb-2"
            placeholder="Password"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-primary text-white rounded-md mt-2 hover:bg-primary-dark focus:ring-2 focus:ring-primary-dark"
          >
            Login
          </button>
        </form>
      );
    }
    export default LoginForm;
