import React from 'react';

const SideBar = ({ onShowDashboard, onShowAssets, onShowAbout, isOpen }) => {
  return (
    <div className={`bg-white shadow-md h-full fixed top-0 left-0 z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'}`}> 
      <nav className="space-y-4 p-4">
        <h3 className='text-xl text-blue-600'>Menu</h3>
        <button onClick={onShowDashboard} className='text-md block text-left'>Dashboard</button>
        <button onClick={onShowAssets} className='text-md block text-left'>Assets</button>
        <button onClick={onShowAbout} className='text-sm block text-left'>About</button>
      </nav>
    </div>
  );
};

export default SideBar;
