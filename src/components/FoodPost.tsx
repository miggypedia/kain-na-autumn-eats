
import React from 'react';
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, ChefHat, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FoodPostProps {
  username: string;
  userAvatar: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  tags: string[];
  timePosted: string;
  isRecipe?: boolean;
  className?: string;
}

const FoodPost = ({
  username,
  userAvatar,
  imageUrl,
  caption,
  likes,
  comments,
  tags,
  timePosted,
  isRecipe = false,
  className,
}: FoodPostProps) => {
  return (
    <article className={cn("tech-card overflow-hidden", className)}>
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img 
              src={userAvatar} 
              alt={username} 
              className="w-10 h-10 rounded-full object-cover border border-secondary/30"
            />
            {isRecipe && (
              <span className="absolute -bottom-1 -right-1 p-1 bg-primary rounded-full">
                <ChefHat className="h-3 w-3 text-white" />
              </span>
            )}
          </div>
          <div>
            <p className="font-medium flex items-center">
              {username}
            </p>
            <p className="text-xs text-muted-foreground">{timePosted}</p>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-muted transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      
      {/* Post Image */}
      <div className="relative">
        <img 
          src={imageUrl} 
          alt="Food post" 
          className="w-full aspect-square md:aspect-auto md:max-h-[500px] object-cover"
        />
        {isRecipe && (
          <div className="absolute bottom-3 right-3 tech-button flex items-center gap-1 py-1 text-sm">
            <Zap className="h-3 w-3" />
            Recipe
          </div>
        )}
      </div>
      
      {/* Post Actions */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex gap-4">
          <button className="group transition-colors">
            <Heart className="h-6 w-6 group-hover:text-primary transition-colors" />
          </button>
          <button className="group transition-colors">
            <MessageCircle className="h-6 w-6 group-hover:text-primary transition-colors" />
          </button>
          <button className="group transition-colors">
            <Share2 className="h-6 w-6 group-hover:text-primary transition-colors" />
          </button>
        </div>
        <button className="group transition-colors">
          <Bookmark className="h-6 w-6 group-hover:text-primary transition-colors" />
        </button>
      </div>
      
      {/* Post Info */}
      <div className="px-3 pb-4">
        <p className="font-medium">{likes.toLocaleString()} likes</p>
        <p className="mt-1">
          <span className="font-medium">{username}</span>
          <span className="ml-2">{caption}</span>
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="food-tag">#{tag}</span>
          ))}
        </div>
        
        {comments > 0 && (
          <button className="text-muted-foreground text-sm mt-2">
            View all {comments} comments
          </button>
        )}
      </div>
    </article>
  );
};

export default FoodPost;
