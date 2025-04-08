
import React, { useState } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Grid, BookOpen, Coffee } from 'lucide-react';

const SAMPLE_USER = {
  username: 'chefmaria',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  postsCount: 42,
  followersCount: 1248,
  followingCount: 567,
  bio: 'Passionate home cook & food photographer 📸 Autumn is my favorite season for cooking! Based in Portland, OR',
  isCurrentUser: true,
};

const SAMPLE_POSTS = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isRecipe: true,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1495147466023-ac2c7914629c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isRecipe: false,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isRecipe: true,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isRecipe: false,
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isRecipe: true,
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isRecipe: true,
  },
];

const SAMPLE_RECIPES = [
  {
    id: 1,
    title: 'Butternut Squash Risotto',
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Spiced Apple Cider',
    imageUrl: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Pumpkin Spice Cookies',
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Roasted Vegetable Tart',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Profile = () => {
  return (
    <div className="pb-16 md:pb-0 md:pt-16">
      <div className="container max-w-screen-md mx-auto">
        <ProfileHeader 
          username={SAMPLE_USER.username}
          avatar={SAMPLE_USER.avatar}
          postsCount={SAMPLE_USER.postsCount}
          followersCount={SAMPLE_USER.followersCount}
          followingCount={SAMPLE_USER.followingCount}
          bio={SAMPLE_USER.bio}
          isCurrentUser={SAMPLE_USER.isCurrentUser}
        />
        
        <Tabs defaultValue="posts" className="mt-4">
          <TabsList className="grid grid-cols-3 border-b border-autumn-cream">
            <TabsTrigger value="posts" className="flex items-center justify-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-autumn-terracotta">
              <Grid className="h-4 w-4" />
              <span>Posts</span>
            </TabsTrigger>
            <TabsTrigger value="recipes" className="flex items-center justify-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-autumn-terracotta">
              <BookOpen className="h-4 w-4" />
              <span>Recipes</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center justify-center gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-autumn-terracotta">
              <Coffee className="h-4 w-4" />
              <span>Tips</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="animate-fade-in mt-4">
            <div className="grid grid-cols-3 gap-1">
              {SAMPLE_POSTS.map((post) => (
                <div key={post.id} className="aspect-square relative group">
                  <img 
                    src={post.imageUrl} 
                    alt="Post" 
                    className="w-full h-full object-cover"
                  />
                  {post.isRecipe && (
                    <div className="absolute top-2 right-2">
                      <BookOpen className="h-4 w-4 text-white drop-shadow-lg" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recipes" className="animate-fade-in mt-4">
            <div className="grid grid-cols-2 gap-4">
              {SAMPLE_RECIPES.map((recipe) => (
                <div key={recipe.id} className="boho-card overflow-hidden">
                  <div className="relative h-40">
                    <img 
                      src={recipe.imageUrl} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white p-3 font-medium">{recipe.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tips" className="animate-fade-in mt-4">
            <div className="text-center py-8">
              <p className="text-autumn-brown/70">No styling tips posted yet.</p>
              <button className="boho-button mt-4">Share Your First Tip</button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
