
import React from 'react';
import { Settings, Edit } from 'lucide-react';

interface ProfileHeaderProps {
  username: string;
  avatar: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  bio: string;
  isCurrentUser?: boolean;
}

const ProfileHeader = ({
  username,
  avatar,
  postsCount,
  followersCount,
  followingCount,
  bio,
  isCurrentUser = false,
}: ProfileHeaderProps) => {
  return (
    <div className="p-4">
      <div className="flex items-start gap-4">
        <div className="relative">
          <img 
            src={avatar} 
            alt={username} 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-autumn-amber"
          />
          {isCurrentUser && (
            <button className="absolute bottom-0 right-0 bg-autumn-terracotta text-white p-1 rounded-full border-2 border-white">
              <Edit className="h-3 w-3" />
            </button>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium text-autumn-brown">{username}</h2>
            {isCurrentUser ? (
              <button className="text-autumn-brown">
                <Settings className="h-5 w-5" />
              </button>
            ) : (
              <button className="boho-button text-sm">Follow</button>
            )}
          </div>
          
          <div className="flex gap-4 mt-3">
            <div className="text-center">
              <p className="font-medium text-autumn-brown">{postsCount}</p>
              <p className="text-xs text-autumn-brown/70">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-autumn-brown">{followersCount}</p>
              <p className="text-xs text-autumn-brown/70">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-autumn-brown">{followingCount}</p>
              <p className="text-xs text-autumn-brown/70">Following</p>
            </div>
          </div>
          
          <p className="mt-3 text-sm text-autumn-brown">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
