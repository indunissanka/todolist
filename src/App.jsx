import React, { useState, useEffect } from 'react';
    import TodoList from './TodoList';
    import TodoForm from './TodoForm';
    import LoginForm from './LoginForm';
    import supabase from './supabase';
    function App() {
      const [todos, setTodos] = useState([]);
      const [loggedIn, setLoggedIn] = useState(false);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const session = supabase.auth.getSession();
        setLoggedIn(!!session);
        if (session) {
          fetchTodos();
        }
        setLoading(false);
      }, []);
      const fetchTodos = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from('todos')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) {
          console.error('Error fetching todos:', error);
        } else {
          setTodos(data);
        }
        setLoading(false);
      };
      const addTodo = async (text, dateTime, note) => {
        setLoading(true);
        const { data, error } = await supabase
          .from('todos')
          .insert([{ text, completed: false, dateTime, note }])
          .select();
        if (error) {
          console.error('Error adding todo:', error);
        } else {
          setTodos([...todos, ...data]);
        }
        setLoading(false);
      };
      const toggleComplete = async (id, completed) => {
        setLoading(true);
        const { error } = await supabase
          .from('todos')
          .update({ completed: !completed })
          .eq('id', id);
        if (error) {
          console.error('Error toggling todo:', error);
        } else {
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
          );
        }
        setLoading(false);
      };
      const removeTodo = async (id) => {
        setLoading(true);
        const { error } = await supabase.from('todos').delete().eq('id', id);
        if (error) {
          console.error('Error removing todo:', error);
        } else {
          setTodos(todos.filter((todo) => todo.id !== id));
        }
        setLoading(false);
      };
      const handleLogin = async (username, password) => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
          email: username,
          password: password,
        });
        if (error) {
          alert('Invalid credentials');
        } else {
          setLoggedIn(true);
          fetchTodos();
        }
        setLoading(false);
      };
      const handleLogout = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        setLoggedIn(false);
        setTodos([]);
        setLoading(false);
      };
      return (
        <div className="bg-light min-h-screen py-10">
          <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : loggedIn ? (
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
