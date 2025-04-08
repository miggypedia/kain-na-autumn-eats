
import React from 'react';
import { Bell, Heart, MessageCircle, UserPlus, ChefHat, Star } from 'lucide-react';

const SAMPLE_NOTIFICATIONS = [
  {
    id: 1,
    type: 'like',
    username: 'foodphotographer',
    userAvatar: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    postImage: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    timeAgo: '2 minutes ago',
  },
  {
    id: 2,
    type: 'comment',
    username: 'bakingqueen',
    userAvatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    postImage: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    comment: 'This looks amazing! Would love to try this recipe 😍',
    timeAgo: '45 minutes ago',
  },
  {
    id: 3,
    type: 'follow',
    username: 'chefmike',
    userAvatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    timeAgo: '2 hours ago',
  },
  {
    id: 4,
    type: 'recipe_saved',
    username: 'foodielove',
    userAvatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    postImage: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    timeAgo: '1 day ago',
  },
  {
    id: 5,
    type: 'featured',
    postImage: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    timeAgo: '2 days ago',
  },
];

const Notifications = () => {
  return (
    <div className="pb-16 md:pb-0 md:pt-16">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="py-4">
          <h1 className="text-2xl font-medium flex items-center gap-2 text-autumn-brown">
            <Bell className="h-6 w-6 text-autumn-terracotta" />
            Notifications
          </h1>
          
          <div className="mt-6">
            {SAMPLE_NOTIFICATIONS.map((notification) => (
              <div 
                key={notification.id} 
                className="boho-card p-4 mb-3 flex items-center gap-3"
              >
                {notification.type === 'like' && (
                  <>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-autumn-terracotta/10 text-autumn-terracotta">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <img 
                          src={notification.userAvatar} 
                          alt={notification.username} 
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <p className="text-autumn-brown">
                          <span className="font-medium">{notification.username}</span> liked your post
                        </p>
                      </div>
                      <p className="text-xs text-autumn-brown/70 mt-1">{notification.timeAgo}</p>
                    </div>
                    <div className="w-12 h-12">
                      <img 
                        src={notification.postImage} 
                        alt="Post" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
                
                {notification.type === 'comment' && (
                  <>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-autumn-amber/20 text-autumn-orange">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <img 
                          src={notification.userAvatar} 
                          alt={notification.username} 
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <p className="text-autumn-brown">
                          <span className="font-medium">{notification.username}</span> commented on your post
                        </p>
                      </div>
                      <p className="text-sm text-autumn-brown/80 mt-1">"{notification.comment}"</p>
                      <p className="text-xs text-autumn-brown/70 mt-1">{notification.timeAgo}</p>
                    </div>
                    <div className="w-12 h-12">
                      <img 
                        src={notification.postImage} 
                        alt="Post" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
                
                {notification.type === 'follow' && (
                  <>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-autumn-sage/20 text-autumn-olive">
                      <UserPlus className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <img 
                          src={notification.userAvatar} 
                          alt={notification.username} 
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <p className="text-autumn-brown">
                          <span className="font-medium">{notification.username}</span> started following you
                        </p>
                      </div>
                      <p className="text-xs text-autumn-brown/70 mt-1">{notification.timeAgo}</p>
                    </div>
                    <button className="boho-button text-xs py-1">Follow</button>
                  </>
                )}
                
                {notification.type === 'recipe_saved' && (
                  <>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-autumn-cream text-autumn-rust">
                      <ChefHat className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <img 
                          src={notification.userAvatar} 
                          alt={notification.username} 
                          className="w-7 h-7 rounded-full object-cover"
                        />
                        <p className="text-autumn-brown">
                          <span className="font-medium">{notification.username}</span> saved your recipe
                        </p>
                      </div>
                      <p className="text-xs text-autumn-brown/70 mt-1">{notification.timeAgo}</p>
                    </div>
                    <div className="w-12 h-12">
                      <img 
                        src={notification.postImage} 
                        alt="Post" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
                
                {notification.type === 'featured' && (
                  <>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-autumn-amber text-autumn-rust">
                      <Star className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-autumn-brown">
                        Your post was featured in Trending this week!
                      </p>
                      <p className="text-xs text-autumn-brown/70 mt-1">{notification.timeAgo}</p>
                    </div>
                    <div className="w-12 h-12">
                      <img 
                        src={notification.postImage} 
                        alt="Post" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
