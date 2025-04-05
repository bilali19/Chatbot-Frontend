import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the login logic
    console.log('Login attempt with:', { username, password });
    // This would connect to your backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Chatbot Login</h1>
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="mr-3 text-gray-500">
                <i className="fas fa-user"></i>
              </div>
              <input
                className="w-full bg-gray-700 text-white border-none rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="mr-3 text-gray-500">
                <i className="fas fa-lock"></i>
              </div>
              <input
                className="w-full bg-gray-700 text-white border-none rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <button
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="submit"
            >
              LOGIN
            </button>
          </div>
          <div className="text-center">
            <span className="text-gray-500">Not a Member? </span>
            <Link to="/signup" className="text-white hover:text-pink-500 cursor-pointer">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;