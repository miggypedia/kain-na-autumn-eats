
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ChefHat, Search, Home, User, BookOpen, PlusSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-autumn-cream p-2 md:top-0 md:bottom-auto z-50">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between md:justify-start md:gap-8">
          <Link to="/" className="hidden md:flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-autumn-terracotta" />
            <span className="text-xl font-medium">Kain Na</span>
          </Link>
          
          <div className={cn("flex justify-around w-full md:w-auto md:ml-auto md:gap-6")}>
            <Link to="/" className="flex flex-col items-center text-autumn-brown hover:text-autumn-terracotta transition-colors">
              <Home className="h-6 w-6" />
              <span className="text-xs md:hidden">Home</span>
            </Link>
            
            <Link to="/explore" className="flex flex-col items-center text-autumn-brown hover:text-autumn-terracotta transition-colors">
              <Search className="h-6 w-6" />
              <span className="text-xs md:hidden">Explore</span>
            </Link>
            
            <Link to="/create" className="flex flex-col items-center text-autumn-brown hover:text-autumn-terracotta transition-colors">
              <PlusSquare className="h-6 w-6" />
              <span className="text-xs md:hidden">Create</span>
            </Link>
            
            <Link to="/recipes" className="flex flex-col items-center text-autumn-brown hover:text-autumn-terracotta transition-colors">
              <BookOpen className="h-6 w-6" />
              <span className="text-xs md:hidden">Recipes</span>
            </Link>
            
            <Link to="/profile" className="flex flex-col items-center text-autumn-brown hover:text-autumn-terracotta transition-colors">
              <User className="h-6 w-6" />
              <span className="text-xs md:hidden">Profile</span>
            </Link>
            
            <Link to="/notifications" className="hidden md:flex items-center text-autumn-brown hover:text-autumn-terracotta transition-colors">
              <Bell className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
