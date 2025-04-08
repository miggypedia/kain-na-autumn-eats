
import React, { useState } from 'react';
import { Upload, ChefHat, X, Camera, Video, FileText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const Create = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [isRecipe, setIsRecipe] = useState(false);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  const removeImage = () => {
    setUploadedImage(null);
  };
  
  return (
    <div className="pb-16 md:pb-0 md:pt-16">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="pt-4 pb-2">
          <h1 className="text-2xl font-medium text-autumn-brown">Create New Post</h1>
        </div>
        
        <Tabs defaultValue="post" className="mt-4">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="post" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>Post</span>
            </TabsTrigger>
            <TabsTrigger value="recipe" className="flex items-center gap-2">
              <ChefHat className="h-4 w-4" />
              <span>Recipe</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Tips</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="post" className="animate-fade-in">
            <div className="boho-card p-6">
              {!uploadedImage ? (
                <div 
                  className="border-2 border-dashed border-autumn-amber/50 rounded-lg p-8 text-center"
                >
                  <div className="max-w-xs mx-auto">
                    <Upload className="h-12 w-12 text-autumn-terracotta mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-autumn-brown mb-2">Upload your food photo</h3>
                    <p className="text-sm text-autumn-brown/70 mb-4">
                      Share your culinary creations with the Kain Na community
                    </p>
                    
                    <label className="boho-button inline-block cursor-pointer">
                      Choose Photo
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded food"
                      className="w-full h-auto rounded-lg"
                    />
                    <button 
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-autumn-rust text-white p-1 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div>
                    <label htmlFor="caption" className="block text-sm font-medium text-autumn-brown mb-2">
                      Write a caption
                    </label>
                    <textarea
                      id="caption"
                      rows={4}
                      className="boho-input w-full resize-none"
                      placeholder="Describe your delicious creation..."
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="isRecipe" 
                      checked={isRecipe}
                      onChange={(e) => setIsRecipe(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="isRecipe" className="text-sm text-autumn-brown">
                      This is a recipe (you can add recipe details later)
                    </label>
                  </div>
                  
                  <button className="boho-button w-full">
                    Share Post
                  </button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="recipe" className="animate-fade-in">
            <div className="boho-card p-6">
              <h3 className="text-xl font-medium text-autumn-brown mb-4">Create a Recipe</h3>
              <p className="text-autumn-brown/70 mb-6">
                Share your culinary expertise with step-by-step instructions, ingredients, and more.
              </p>
              
              {/* Recipe creation form - simplified for this first version */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="recipe-title" className="block text-sm font-medium text-autumn-brown mb-2">
                    Recipe Title
                  </label>
                  <input
                    type="text"
                    id="recipe-title"
                    className="boho-input w-full"
                    placeholder="e.g., Autumn Spiced Pumpkin Soup"
                  />
                </div>
                
                <div>
                  <label htmlFor="recipe-desc" className="block text-sm font-medium text-autumn-brown mb-2">
                    Short Description
                  </label>
                  <textarea
                    id="recipe-desc"
                    rows={3}
                    className="boho-input w-full resize-none"
                    placeholder="A brief description of your recipe..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="prep-time" className="block text-sm font-medium text-autumn-brown mb-2">
                      Prep Time (minutes)
                    </label>
                    <input
                      type="number"
                      id="prep-time"
                      className="boho-input w-full"
                      placeholder="15"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="cook-time" className="block text-sm font-medium text-autumn-brown mb-2">
                      Cook Time (minutes)
                    </label>
                    <input
                      type="number"
                      id="cook-time"
                      className="boho-input w-full"
                      placeholder="30"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="servings" className="block text-sm font-medium text-autumn-brown mb-2">
                      Servings
                    </label>
                    <input
                      type="number"
                      id="servings"
                      className="boho-input w-full"
                      placeholder="4"
                    />
                  </div>
                </div>
                
                <p className="text-autumn-brown font-medium">Upload Cover Image</p>
                <div 
                  className="border-2 border-dashed border-autumn-amber/50 rounded-lg p-4 text-center"
                >
                  <label className="cursor-pointer block">
                    <div className="py-4">
                      <Upload className="h-8 w-8 text-autumn-terracotta mx-auto mb-2" />
                      <p className="text-sm text-autumn-brown/70">Click to upload recipe photo</p>
                    </div>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden"
                    />
                  </label>
                </div>
                
                <p className="text-autumn-brown font-medium">
                  Note: You'll be able to add ingredients and instructions in the next step
                </p>
                
                <button className="boho-button w-full">
                  Continue to Recipe Details
                </button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tips" className="animate-fade-in">
            <div className="boho-card p-6">
              <h3 className="text-xl font-medium text-autumn-brown mb-4">Share Food Styling Tips</h3>
              <p className="text-autumn-brown/70 mb-6">
                Help others create stunning food photography with your expert tips and advice.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="tip-title" className="block text-sm font-medium text-autumn-brown mb-2">
                    Tip Title
                  </label>
                  <input
                    type="text"
                    id="tip-title"
                    className="boho-input w-full"
                    placeholder="e.g., 5 Ways to Style Autumn Desserts"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-autumn-brown mb-2">
                    Category
                  </label>
                  <select className="boho-input w-full">
                    <option value="">Select a category</option>
                    <option value="photography">Food Photography</option>
                    <option value="styling">Food Styling</option>
                    <option value="props">Props & Accessories</option>
                    <option value="lighting">Lighting Techniques</option>
                    <option value="editing">Editing & Post-processing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="tip-content" className="block text-sm font-medium text-autumn-brown mb-2">
                    Content
                  </label>
                  <textarea
                    id="tip-content"
                    rows={6}
                    className="boho-input w-full resize-none"
                    placeholder="Share your knowledge and expertise..."
                  ></textarea>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="flex-1">
                    <p className="text-autumn-brown font-medium mb-2">Add Media (Optional)</p>
                    <div className="flex gap-2">
                      <button className="boho-button bg-autumn-amber text-autumn-brown flex items-center gap-1 text-sm">
                        <Camera className="h-4 w-4" />
                        <span>Photo</span>
                      </button>
                      <button className="boho-button bg-autumn-amber text-autumn-brown flex items-center gap-1 text-sm">
                        <Video className="h-4 w-4" />
                        <span>Video</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <button className="boho-button w-full">
                  Share Tip
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Create;
