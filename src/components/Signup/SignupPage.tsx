import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.username || !formData.email || !formData.password || formData.password !== formData.confirmPassword) {
      alert("Please fill out all fields and ensure passwords match");
      return;
    }

    // Submit data to your backend
    console.log('Signup data:', formData);
    
    // Redirect to login page after signup
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Chatbot Signup</h1>
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="mr-3 text-gray-500">
                <i className="fas fa-user"></i>
              </div>
              <input
                className="w-full bg-gray-700 text-white border-none rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="mr-3 text-gray-500">
                <i className="fas fa-envelope"></i>
              </div>
              <input
                className="w-full bg-gray-700 text-white border-none rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="mr-3 text-gray-500">
                <i className="fas fa-lock"></i>
              </div>
              <input
                className="w-full bg-gray-700 text-white border-none rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
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
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <button
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
              type="submit"
            >
              SIGN UP
            </button>
          </div>
          <div className="text-center">
            <span className="text-gray-500">Already have an account? </span>
            <Link to="/login" className="text-white hover:text-pink-500 cursor-pointer">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;