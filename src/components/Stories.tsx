
import React from 'react';
import { mockStories } from '../data/mockData';

const Stories = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {mockStories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {story.isLive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    LIVE
                  </div>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-600 text-center max-w-16 truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
