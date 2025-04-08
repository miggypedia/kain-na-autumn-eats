
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 w-full glass-bg border-b border-border/30 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden w-8" /> {/* Spacer for mobile */}
          
          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search recipes and creators..."
                className="tech-input w-full pl-10 py-2 bg-muted"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover border border-primary/30"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
