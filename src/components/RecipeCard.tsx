
import React from 'react';
import { Clock, Utensils, Users, ArrowRight, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  title: string;
  image: string;
  cookTime: string;
  difficulty: string;
  servings: number;
  authorName: string;
  authorAvatar: string;
  tags: string[];
  className?: string;
}

const RecipeCard = ({
  title,
  image,
  cookTime,
  difficulty,
  servings,
  authorName,
  authorAvatar,
  tags,
  className,
}: RecipeCardProps) => {
  return (
    <div className={cn("boho-card h-full flex flex-col", className)}>
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-medium text-lg line-clamp-2">{title}</h3>
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="food-tag">#{tag}</span>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center text-center">
            <Clock className="h-5 w-5 text-autumn-terracotta mb-1" />
            <span className="text-xs text-autumn-brown">{cookTime}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Utensils className="h-5 w-5 text-autumn-terracotta mb-1" />
            <span className="text-xs text-autumn-brown">{difficulty}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-5 w-5 text-autumn-terracotta mb-1" />
            <span className="text-xs text-autumn-brown">{servings} servings</span>
          </div>
        </div>
        
        <div className="mt-auto pt-3 border-t border-autumn-cream">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={authorAvatar} alt={authorName} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-xs text-autumn-brown/80">by</p>
                <p className="text-sm font-medium text-autumn-brown flex items-center">
                  {authorName}
                  <ChefHat className="h-3 w-3 ml-1 text-autumn-terracotta" />
                </p>
              </div>
            </div>
            <button className="text-autumn-terracotta hover:text-autumn-rust transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
