
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StoryCircle from './StoryCircle';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Story {
  id: number;
  username: string;
  userAvatar?: string;
  isActive: boolean;
}

interface StoriesCarouselProps {
  stories: Story[];
  className?: string;
}

const StoriesCarousel: React.FC<StoriesCarouselProps> = ({ stories, className }) => {
  return (
    <div className={cn("relative w-full py-4", className)}>
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:pl-4 basis-auto">
            <StoryCircle 
              username="Your Story" 
              isNew={true} 
              onClick={() => console.log("Add new story")} 
            />
          </CarouselItem>
          
          {stories.map((story) => (
            <CarouselItem className="pl-2 md:pl-4 basis-auto" key={story.id}>
              <StoryCircle 
                imageUrl={story.userAvatar} 
                username={story.username} 
                isActive={story.isActive} 
                onClick={() => console.log(`View story from ${story.username}`)} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-0 bg-card/80 backdrop-blur-sm border border-border/30 hover:bg-card" />
        <CarouselNext className="right-0 bg-card/80 backdrop-blur-sm border border-border/30 hover:bg-card" />
      </Carousel>
    </div>
  );
};

export default StoriesCarousel;
