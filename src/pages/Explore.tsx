
import React, { useState } from 'react';
import { Search, TrendingUp, Coffee, Utensils, Salad, CakeSlice, Pizza, IceCream } from 'lucide-react';
import { cn } from '@/lib/utils';

const POPULAR_TAGS = [
  { name: 'autumn', count: 24.5 },
  { name: 'comfortfood', count: 18.3 },
  { name: 'homemade', count: 15.7 },
  { name: 'foodphotography', count: 12.9 },
  { name: 'seasonal', count: 10.4 },
  { name: 'baking', count: 9.8 },
  { name: 'pumpkin', count: 8.6 },
  { name: 'recipe', count: 7.5 },
];

const CATEGORIES = [
  { name: 'Breakfast', icon: Coffee },
  { name: 'Lunch', icon: Utensils },
  { name: 'Dinner', icon: Salad },
  { name: 'Dessert', icon: CakeSlice },
  { name: 'Snacks', icon: Pizza },
  { name: 'Drinks', icon: IceCream },
];

const TRENDING_POSTS = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    username: 'foodielove',
    likes: 2437,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    username: 'chefmike',
    likes: 1892,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1532939624-3af1308db9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    username: 'sweetooth',
    likes: 1654,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    username: 'veggiemaster',
    likes: 1432,
  },
];

const DISCOVER_POSTS = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1495147466023-ac2c7914629c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  return (
    <div className="pb-16 md:pb-0 md:pt-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="py-4">
          <div className="relative max-w-md mx-auto mb-6">
            <input 
              type="text" 
              placeholder="Search for recipes, ideas, users..." 
              className="boho-input pl-10 pr-4 py-3 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-autumn-brown/70" />
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-medium text-autumn-brown mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-autumn-terracotta" />
              Popular Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className={cn(
                "px-3 py-1 rounded-full text-sm bg-autumn-terracotta text-white",
              )}>
                All
              </button>
              {POPULAR_TAGS.map((tag) => (
                <button 
                  key={tag.name}
                  className="px-3 py-1 rounded-full text-sm bg-autumn-sage/30 text-autumn-olive hover:bg-autumn-sage/50 transition-colors"
                >
                  #{tag.name}
                  <span className="ml-1 text-xs opacity-70">{tag.count}k</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-medium text-autumn-brown mb-4">Categories</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              <button 
                className={cn(
                  "flex flex-col items-center p-3 rounded-lg transition-colors",
                  activeCategory === 'All' 
                    ? "bg-autumn-terracotta text-white" 
                    : "bg-autumn-cream/50 text-autumn-brown hover:bg-autumn-amber/30"
                )}
                onClick={() => setActiveCategory('All')}
              >
                <Utensils className="h-6 w-6 mb-2" />
                <span>All</span>
              </button>
              
              {CATEGORIES.map((category) => (
                <button 
                  key={category.name}
                  className={cn(
                    "flex flex-col items-center p-3 rounded-lg transition-colors",
                    activeCategory === category.name 
                      ? "bg-autumn-terracotta text-white" 
                      : "bg-autumn-cream/50 text-autumn-brown hover:bg-autumn-amber/30"
                  )}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <category.icon className="h-6 w-6 mb-2" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-medium text-autumn-brown mb-4">Trending Posts</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRENDING_POSTS.map((post) => (
                <div key={post.id} className="boho-card overflow-hidden">
                  <div className="relative h-60 sm:h-40 md:h-60">
                    <img 
                      src={post.imageUrl} 
                      alt="Trending post" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                      <p className="text-white font-medium">@{post.username}</p>
                      <p className="text-white/80 text-sm">{post.likes.toLocaleString()} likes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-medium text-autumn-brown mb-4">Discover</h2>
            <div className="grid grid-cols-3 gap-1">
              {DISCOVER_POSTS.map((post) => (
                <div key={post.id} className="aspect-square relative group">
                  <img 
                    src={post.imageUrl} 
                    alt="Discover" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
