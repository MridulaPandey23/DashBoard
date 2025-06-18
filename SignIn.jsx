import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === formData.email && user.password === formData.password) {
      navigate('/dashboard');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Welcome back</h2>
        {message && <div className="text-red-500 text-sm text-center">{message}</div>}

        <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded">Sign In</button>
        <p className="text-center text-sm">Don't have an account? <a className="text-blue-500" href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default SignIn;