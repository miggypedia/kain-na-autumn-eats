
import React from 'react';
import { Heart, MessageCircle, Bookmark, Share2, MoreHorizontal, ChefHat } from 'lucide-react';
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
    <article className={cn("boho-card mb-6", className)}>
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <img 
            src={userAvatar} 
            alt={username} 
            className="w-10 h-10 rounded-full object-cover border-2 border-autumn-amber"
          />
          <div>
            <p className="font-medium text-autumn-brown flex items-center">
              {username}
              {isRecipe && (
                <ChefHat className="h-4 w-4 ml-1 text-autumn-terracotta" />
              )}
            </p>
          </div>
        </div>
        <button>
          <MoreHorizontal className="h-5 w-5 text-autumn-brown" />
        </button>
      </div>
      
      {/* Post Image */}
      <div className="relative">
        <img src={imageUrl} alt="Food post" className="w-full aspect-square md:aspect-auto md:max-h-[600px] object-cover" />
        {isRecipe && (
          <div className="absolute bottom-3 right-3 bg-autumn-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
            Recipe
          </div>
        )}
      </div>
      
      {/* Post Actions */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex gap-4">
          <button className="text-autumn-brown hover:text-autumn-terracotta transition-colors">
            <Heart className="h-6 w-6" />
          </button>
          <button className="text-autumn-brown hover:text-autumn-terracotta transition-colors">
            <MessageCircle className="h-6 w-6" />
          </button>
          <button className="text-autumn-brown hover:text-autumn-terracotta transition-colors">
            <Share2 className="h-6 w-6" />
          </button>
        </div>
        <button className="text-autumn-brown hover:text-autumn-terracotta transition-colors">
          <Bookmark className="h-6 w-6" />
        </button>
      </div>
      
      {/* Post Info */}
      <div className="px-3 pb-2">
        <p className="font-medium text-autumn-brown">{likes.toLocaleString()} likes</p>
        <p className="mt-1">
          <span className="font-medium text-autumn-brown">{username}</span>
          <span className="ml-2 text-autumn-brown">{caption}</span>
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="food-tag">#{tag}</span>
          ))}
        </div>
        
        <p className="text-xs text-autumn-brown/70 mt-2">{timePosted}</p>
        
        {comments > 0 && (
          <button className="text-autumn-brown/70 text-sm mt-1">
            View all {comments} comments
          </button>
        )}
      </div>
    </article>
  );
};

export default FoodPost;
