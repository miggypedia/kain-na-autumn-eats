
import React from 'react';
import FoodPost from '@/components/FoodPost';
import { ChefHat } from 'lucide-react';

const SAMPLE_POSTS = [
  {
    id: 1,
    username: 'chefmaria',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Autumn harvest pasta with butternut squash, sage, and brown butter 🍝🧡 #seasonal #pasta #comfortfood',
    likes: 892,
    comments: 32,
    tags: ['pasta', 'autumn', 'homemade'],
    timePosted: '3 hours ago',
    isRecipe: true,
  },
  {
    id: 2,
    username: 'foodphotographer',
    userAvatar: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1556031801-7c7add3e9c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Golden hour lighting makes everything better, especially these cinnamon apple turnovers! ✨',
    likes: 1204,
    comments: 45,
    tags: ['foodstyling', 'dessert', 'apples'],
    timePosted: '5 hours ago',
    isRecipe: false,
  },
  {
    id: 3,
    username: 'bakingqueen',
    userAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Weekend baking project: rustic pumpkin bread with maple glaze 🍞 ✨',
    likes: 756,
    comments: 29,
    tags: ['baking', 'pumpkin', 'fallrecipes'],
    timePosted: '1 day ago',
    isRecipe: true,
  },
];

const Home = () => {
  return (
    <div className="pb-16 md:pb-0 md:pt-16">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="pt-4 pb-2 flex items-center justify-center md:justify-start">
          <h1 className="text-2xl font-medium flex items-center gap-2 text-autumn-brown">
            <ChefHat className="h-6 w-6 text-autumn-terracotta" />
            Kain Na
          </h1>
        </div>
        
        <div className="my-4">
          {SAMPLE_POSTS.map((post) => (
            <FoodPost
              key={post.id}
              username={post.username}
              userAvatar={post.userAvatar}
              imageUrl={post.imageUrl}
              caption={post.caption}
              likes={post.likes}
              comments={post.comments}
              tags={post.tags}
              timePosted={post.timePosted}
              isRecipe={post.isRecipe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
