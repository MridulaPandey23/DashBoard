import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const Dashboard = () => {
  const [content, setContent] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

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

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatLog([...chatLog, { user: chatInput, reply: `Searching for ${chatInput}` }]);
      setChatInput('');
    }
  };

  return (
    <div className="flex min-h-screen">
      {sidebarOpen && (
        <SideBar 
          onShowDashboard={() => setContent('dashboard')} 
          onShowAssets={() => setContent('assets')} 
          onShowAbout={() => setContent('about')} 
          isOpen={sidebarOpen}
        />
      )}

      <div className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${sidebarOpen ? 'ml-[200px]' : 'ml-0'}`}>
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} onShowAccount={() => setContent('account')} />
        <div className="p-6 flex-1">
          {renderContent()}
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-30 w-72 bg-white border border-gray-300 shadow-xl rounded-xl flex flex-col max-h-[80vh]">
        <div className="px-4 py-2 border-b text-purple-700 font-semibold">
          Chatbot
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
          {chatLog.map((chat, index) => (
            <div key={index}>
              <div className="text-right">
                <div className="inline-block bg-purple-100 text-purple-900 px-3 py-1 rounded-lg">
                  {chat.user}
                </div>
              </div>
              <div className="text-left mt-1">
                <div className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">
                  {chat.reply}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleChatSubmit} className="p-2 border-t">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-purple-400" 
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
