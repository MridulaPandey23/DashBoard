import React, { useEffect, useState } from 'react';

const SideBar = ({ onShowDashboard, onShowAssets, onShowAbout, isOpen }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.body.classList.contains('light-theme');
      setIsLightTheme(isLight);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-20 h-full transition-transform duration-300 
        ${isOpen ? 'translate-x-0 w-[200px]' : '-translate-x-full w-0'} 
        ${isLightTheme ? 'bg-[#f1f4f9] text-gray-900' : 'bg-white text-black'} shadow-md`}
    >
      <nav className="space-y-4 p-4">
        <h3 className="text-xl text-blue-600">Menu</h3>
        <button onClick={onShowDashboard} className="text-md block text-left">Dashboard</button>
        <button onClick={onShowAssets} className="text-md block text-left">Assets</button>
        <button onClick={onShowAbout} className="text-sm block text-left">About</button>
      </nav>
    </div>
  );
};

export default SideBar;

