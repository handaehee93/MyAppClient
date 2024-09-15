// src/pages/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 정보:', { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-start mr-10">
        <h1 className="text-6xl text-blue-600 font-bold mb-4">Hello</h1>
        <p className="text-2xl text-gray-600">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="p-3 bg-blue-600 text-white rounded-lg font-bold">
            Log In
          </button>
          <a href="/" className="text-blue-600 text-center mt-2">
            Forgotten password?
          </a>
          <div className="border-t border-gray-300 my-4"></div>
          <button className="p-3 bg-green-500 text-white rounded-lg font-bold">
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
