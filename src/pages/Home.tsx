
import React from 'react';
import FoodPost from '@/components/FoodPost';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SAMPLE_POSTS = [
  {
    id: 1,
    username: "chefmaria",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Molecular gastronomy experiment: foam-infused risotto with deconstructed pesto elements 🧪✨ #avantgarde #modernfood",
    likes: 892,
    comments: 32,
    tags: ["molecular", "gastronomy", "experimental"],
    timePosted: "3 hours ago",
    isRecipe: true,
  },
  {
    id: 2,
    username: "foodphotographer",
    userAvatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    imageUrl: "https://images.unsplash.com/photo-1556031801-7c7add3e9c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Light manipulation through prismatic tableware creates this surreal dining experience ✨",
    likes: 1204,
    comments: 45,
    tags: ["lightplay", "foodart", "surreal"],
    timePosted: "5 hours ago",
    isRecipe: false,
  },
  {
    id: 3,
    username: "bakingqueen",
    userAvatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    imageUrl: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    caption: "Geometric precision: cubist-inspired dessert architecture with edible metallic elements 🍰 ✨",
    likes: 756,
    comments: 29,
    tags: ["geometric", "avantgarde", "edibleart"],
    timePosted: "1 day ago",
    isRecipe: true,
  },
];

const TRENDING_TOPICS = [
  { name: "Molecular Gastronomy", posts: 1243 },
  { name: "Food Photography", posts: 987 },
  { name: "Fusion Cuisine", posts: 756 },
  { name: "Zero Waste Cooking", posts: 542 },
  { name: "Fermentation", posts: 432 }
];

const SUGGESTED_CREATORS = [
  {
    username: "modernchef",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    specialty: "Molecular Gastronomy"
  },
  {
    username: "foodstylist",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    specialty: "Food Styling"
  },
  {
    username: "avantgardebaker",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    specialty: "Sculptural Desserts"
  }
];

const Home = () => {
  return (
    <div className="md:pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed - 2/3 width on desktop */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Feed
              </span>
            </h2>
            <button className="flex items-center gap-1 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span>For You</span>
            </button>
          </div>
          
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
              className="tech-card"
            />
          ))}
        </div>
        
        {/* Sidebar - 1/3 width on desktop */}
        <div className="hidden lg:block space-y-6">
          {/* Trending Topics */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="text-lg">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {TRENDING_TOPICS.map((topic, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-medium">#{topic.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{topic.posts} posts</span>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Suggested Creators */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="text-lg">Discover Creators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {SUGGESTED_CREATORS.map((creator, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img 
                    src={creator.avatar} 
                    alt={creator.username} 
                    className="w-10 h-10 rounded-full object-cover border border-primary/30"
                  />
                  <div>
                    <p className="font-medium">@{creator.username}</p>
                    <p className="text-xs text-muted-foreground">{creator.specialty}</p>
                  </div>
                  <button className="ml-auto text-xs tech-button py-1 px-3">Follow</button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
