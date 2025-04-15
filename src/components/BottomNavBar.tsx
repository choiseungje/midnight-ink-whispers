
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, SendHorizonal, Users, User } from "lucide-react";

const BottomNavBar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-midnight-light border-t border-purple/20">
      <div className="flex justify-around items-center px-4 h-16">
        <Link 
          to="/inbox" 
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${isActive('/inbox') ? 'text-purple-light' : 'text-gray-400'}`}
        >
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Inbox</span>
        </Link>
        
        <Link 
          to="/sent" 
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${isActive('/sent') ? 'text-purple-light' : 'text-gray-400'}`}
        >
          <SendHorizonal className="h-6 w-6" />
          <span className="text-xs mt-1">Sent</span>
        </Link>
        
        <Link 
          to="/friends" 
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${isActive('/friends') ? 'text-purple-light' : 'text-gray-400'}`}
        >
          <Users className="h-6 w-6" />
          <span className="text-xs mt-1">Friends</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center justify-center w-1/4 py-2 ${isActive('/profile') ? 'text-purple-light' : 'text-gray-400'}`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
