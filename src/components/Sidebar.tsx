
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Search, Home, User, BookOpen, PlusSquare, Bell, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-muted text-foreground"
      >
        {expanded ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 glass-bg border-r border-border/30 transition-transform duration-300 transform",
        expanded ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="h-full flex flex-col p-4">
          <Link to="/" className="flex items-center gap-2 px-2 py-4">
            <ChefHat className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kain Na
            </span>
          </Link>
          
          <nav className="flex-1 mt-8 space-y-2">
            <SidebarLink to="/" active={isActive('/')} icon={<Home />} label="Feed" />
            <SidebarLink to="/explore" active={isActive('/explore')} icon={<Search />} label="Explore" />
            <SidebarLink to="/create" active={isActive('/create')} icon={<PlusSquare />} label="Create" />
            <SidebarLink to="/recipes" active={isActive('/recipes')} icon={<BookOpen />} label="Recipes" />
            <SidebarLink to="/profile" active={isActive('/profile')} icon={<User />} label="Profile" />
            <SidebarLink to="/notifications" active={isActive('/notifications')} icon={<Bell />} label="Notifications" />
          </nav>
          
          <div className="mt-auto pt-4 border-t border-border/30">
            <div className="flex items-center p-2 rounded-lg glass-bg">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border border-primary/30"
              />
              <div className="ml-2">
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs text-muted-foreground">@janedoe</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Overlay to close sidebar on mobile */}
      {expanded && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

interface SidebarLinkProps {
  to: string;
  active: boolean;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink = ({ to, active, icon, label }: SidebarLinkProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
        active 
          ? "bg-primary/10 text-primary font-medium" 
          : "text-foreground hover:bg-muted"
      )}
    >
      <span className={cn(
        "p-1 rounded-md",
        active ? "text-primary" : "text-muted-foreground"
      )}>
        {icon}
      </span>
      <span>{label}</span>
      {active && <span className="ml-auto w-1.5 h-5 bg-primary rounded-full" />}
    </Link>
  );
};

export default Sidebar;
