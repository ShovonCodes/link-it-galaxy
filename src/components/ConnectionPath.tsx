
import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Actor, Movie, findConnectingMovie } from "@/data/movieData";
import ActorCard from "./ActorCard";
import MovieCard from "./MovieCard";

interface ConnectionPathProps {
  path: Actor[];
  onClearPath: () => void;
}

const ConnectionPath = ({ path, onClearPath }: ConnectionPathProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [path]);

  if (path.length <= 1) {
    return null;
  }

  const renderConnections = () => {
    const connections = [];

    for (let i = 0; i < path.length - 1; i++) {
      const currentActor = path[i];
      const nextActor = path[i + 1];
      const connectingMovie = findConnectingMovie(currentActor.id, nextActor.id);

      connections.push(
        <ActorCard 
          key={`actor-${i}`}
          name={currentActor.name}
          imageUrl={currentActor.imageUrl}
          size="small"
        />
      );

      if (connectingMovie) {
        connections.push(
          <ChevronRight key={`arrow-${i}`} className="text-cinema-purple mx-1" />
        );
        
        connections.push(
          <MovieCard 
            key={`movie-${i}`}
            title={connectingMovie.title}
            year={connectingMovie.year}
            imageUrl={connectingMovie.imageUrl}
          />
        );
        
        connections.push(
          <ChevronRight key={`arrow-after-${i}`} className="text-cinema-purple mx-1" />
        );
      } else {
        connections.push(
          <ChevronRight key={`arrow-${i}`} className="text-cinema-purple mx-1" />
        );
      }
    }

    // Add the last actor
    connections.push(
      <ActorCard 
        key={`actor-${path.length - 1}`}
        name={path[path.length - 1].name}
        imageUrl={path[path.length - 1].imageUrl}
        size="small"
      />
    );

    return connections;
  };

  return (
    <div className="w-full bg-cinema-darkPurple rounded-lg p-4 mb-6 animate-fade-in">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white font-semibold">Current Path</h2>
        <button 
          onClick={onClearPath}
          className="text-sm text-cinema-purple hover:text-cinema-lightPurple transition-colors"
        >
          Clear Path
        </button>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex items-center space-x-2 overflow-x-auto pb-2"
      >
        {renderConnections()}
      </div>
      
      <div className="mt-2 text-right">
        <span className="text-white text-sm">
          <span className="text-cinema-purple font-bold">{Math.floor(path.length / 2)}</span> degrees of separation
        </span>
      </div>
    </div>
  );
};

export default ConnectionPath;
