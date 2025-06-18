import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const SideBar = ({ onShowDashboard, onShowAssets, onShowAbout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden p-2">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>
      <div className={`sm:block ${isOpen ? 'block' : 'hidden'} w-64 sm:w-64 h-full sm:h-screen bg-white shadow-md p-4 absolute sm:relative z-10`}>
        <nav className="space-y-4">
          <h3 className='text-xl font-bold text-blue-600 bg-blue-100 px-4 py-2 text-center'>Menu</h3>
          <button className='w-full bg-gray-200 hover:bg-blue-400 text-black py-2 px-6'onClick={onShowDashboard}>Dashboard</button>
          <br />
          <button className='w-full bg-gray-200 hover:bg-blue-400 text-black py-2 px-6' onClick={onShowAssets}>Assets</button>
          <br />
          <button onClick={onShowAbout} className='w-full bg-gray-200 hover:bg-blue-400 text-black py-2 px-6'>About</button>
        </nav>
      </div>
    </>
  );
};

export default SideBar;