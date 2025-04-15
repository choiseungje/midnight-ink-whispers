
import React from 'react';
import { Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-midnight border-b border-purple/20">
      <div className="flex items-center">
        <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-light to-purple">Midnight Ink</h1>
      </div>
      
      <div className="flex items-center gap-2 text-purple-light text-sm font-medium">
        <Clock className="h-4 w-4" />
        <span>Messages deliver at 10:00 PM</span>
      </div>
    </header>
  );
};

export default Header;
