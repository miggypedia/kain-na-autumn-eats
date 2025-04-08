
import React from 'react';
import RecipeCard from '@/components/RecipeCard';
import { BookOpen, Search } from 'lucide-react';

const SAMPLE_RECIPES = [
  {
    id: 1,
    title: 'Butternut Squash Risotto with Crispy Sage',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cookTime: '45 min',
    difficulty: 'Medium',
    servings: 4,
    authorName: 'chefmaria',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    tags: ['risotto', 'autumn', 'italian'],
  },
  {
    id: 2,
    title: 'Apple Cinnamon Overnight Oats',
    image: 'https://images.unsplash.com/photo-1584351746379-37e8d0e2c170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cookTime: '10 min',
    difficulty: 'Easy',
    servings: 1,
    authorName: 'healthyfoodie',
    authorAvatar: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    tags: ['breakfast', 'vegan', 'mealprep'],
  },
  {
    id: 3,
    title: 'Maple Glazed Roasted Brussels Sprouts',
    image: 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cookTime: '30 min',
    difficulty: 'Easy',
    servings: 4,
    authorName: 'veggielover',
    authorAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    tags: ['sidedish', 'vegetables', 'roasted'],
  },
  {
    id: 4,
    title: 'Caramelized Onion and Gruyère Tart',
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cookTime: '1 hour',
    difficulty: 'Medium',
    servings: 6,
    authorName: 'bakingqueen',
    authorAvatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    tags: ['tart', 'savory', 'entertaining'],
  },
  {
    id: 5,
    title: 'Spiced Pumpkin Soup',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cookTime: '40 min',
    difficulty: 'Easy',
    servings: 4,
    authorName: 'soupmaster',
    authorAvatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    tags: ['soup', 'pumpkin', 'fall'],
  },
  {
    id: 6,
    title: 'Brown Butter Chocolate Chip Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    cookTime: '30 min',
    difficulty: 'Easy',
    servings: 24,
    authorName: 'bakingqueen',
    authorAvatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    tags: ['cookies', 'dessert', 'chocolate'],
  },
];

const Recipes = () => {
  return (
    <div className="pb-16 md:pb-0 md:pt-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-4 flex items-center justify-between">
          <h1 className="text-2xl font-medium flex items-center gap-2 text-autumn-brown">
            <BookOpen className="h-6 w-6 text-autumn-terracotta" />
            Recipes
          </h1>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search recipes..." 
              className="boho-input pl-9 pr-4 py-2 w-full md:w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-autumn-brown/70" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
          {SAMPLE_RECIPES.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              cookTime={recipe.cookTime}
              difficulty={recipe.difficulty}
              servings={recipe.servings}
              authorName={recipe.authorName}
              authorAvatar={recipe.authorAvatar}
              tags={recipe.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
