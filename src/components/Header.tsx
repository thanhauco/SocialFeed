
import React from 'react';
import { MessageSquare, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            SocialFeed
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="hover:scale-110 transition-transform duration-200">
            <MessageSquare size={24} className="text-gray-700 hover:text-black" />
          </button>
          <button className="hover:scale-110 transition-transform duration-200">
            <Users size={24} className="text-gray-700 hover:text-black" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:scale-110 transition-transform duration-200"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
