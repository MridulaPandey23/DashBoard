// components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = ({ onToggleSidebar, onShowAccount }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const user = JSON.parse(localStorage.getItem('user')) || { fullName: 'Guest', email: 'guest@example.com' };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <>
      <div className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md flex justify-between items-center px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button onClick={onToggleSidebar} className="text-white focus:outline-none">
            <Menu />
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="hover:underline"
          >
            Account
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80">
            <h2 className="text-lg font-semibold mb-4 text-purple-700">Account Info</h2>
            <p className="text-sm text-gray-700"><strong>Name:</strong> {user.fullName}</p>
            <p className="text-sm text-gray-700"><strong>Email:</strong> {user.email}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
