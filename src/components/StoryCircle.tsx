
import React from 'react';
import { cn } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';

interface StoryCircleProps {
  imageUrl?: string;
  username: string;
  isActive?: boolean;
  isNew?: boolean;
  onClick?: () => void;
  className?: string;
}

const StoryCircle: React.FC<StoryCircleProps> = ({
  imageUrl,
  username,
  isActive = false,
  isNew = false,
  onClick,
  className,
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center space-y-1 cursor-pointer transition-transform hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "relative w-16 h-16 rounded-full p-[2px]",
        isActive ? "bg-gradient-to-tr from-primary to-secondary" : "bg-muted/80"
      )}>
        {isNew ? (
          <div className="flex items-center justify-center w-full h-full rounded-full bg-muted">
            <PlusCircle className="w-8 h-8 text-primary" />
          </div>
        ) : (
          <>
            <div className="w-full h-full rounded-full overflow-hidden">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={username} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">
                    {username.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            {isActive && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
            )}
          </>
        )}
      </div>
      <span className="text-xs font-medium truncate max-w-[64px]">
        {isNew ? "Add Story" : username}
      </span>
    </div>
  );
};

export default StoryCircle;
