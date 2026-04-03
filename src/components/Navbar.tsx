import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
  userName: string;
  userRole: string;
}

export function Navbar({ onMenuClick, userName, userRole }: NavbarProps) {
  const initials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-slate-100 rounded-lg lg:hidden text-slate-600"
        >
          <Menu size={20} />
        </button>
        
        <div className="hidden md:flex items-center bg-slate-100 px-3 py-2 rounded-xl w-64 lg:w-96">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search dashboard..." 
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200 mx-2 hidden sm:block"></div>
        
        <button className="flex items-center gap-3 p-1 hover:bg-slate-100 rounded-lg transition-colors">
          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
            {initials || 'U'}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-slate-900 leading-none">{userName}</p>
            <p className="text-xs text-slate-500 mt-1">{userRole}</p>
          </div>
        </button>
      </div>
    </header>
  );
}
