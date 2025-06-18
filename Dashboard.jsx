import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const Dashboard = () => {
  const [content, setContent] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (content) {
      case 'assets':
        return <p className="text-sm text-gray-700">Here are your assets listed.</p>;
      case 'about':
        return <p className="text-sm text-gray-700">This dashboard provides access to various sections including assets, account details, and overview functionalities.</p>;
      case 'account':
        const user = JSON.parse(localStorage.getItem('user'));
        return (
          <div className="text-sm text-gray-700">
            <p><strong>Full Name:</strong> {user?.fullName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
        );
      default:
        return (
          <>
            <h1 className="text-xl font-bold text-blue-700">Dashboard Overview</h1>
            <p className='text-sm text-gray-500'>Welcome back! Here's what's happening with your business today!</p>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen">
      <SideBar 
        onShowDashboard={() => setContent('dashboard')} 
        onShowAssets={() => setContent('assets')} 
        onShowAbout={() => setContent('about')} 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col">
        <Navbar 
          onShowAccount={() => setContent('account')} 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        />
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
