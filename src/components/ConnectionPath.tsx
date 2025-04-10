
import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Element, findConnection } from "@/data/elementsData";
import ActorCard from "./ActorCard";
import ElementCard from "./ElementCard";

interface ConnectionPathProps {
  path: Element[];
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

    for (let i = 0; i < path.length; i++) {
      const currentElement = path[i];
      
      // Add the element
      connections.push(
        <ActorCard 
          key={`element-${i}`}
          name={currentElement.name}
          imageUrl={currentElement.imageUrl}
          size="small"
        />
      );

      // Add arrow if not the last element
      if (i < path.length - 1) {
        const nextElement = path[i + 1];
        const connection = findConnection(currentElement.id, nextElement.id);
        
        connections.push(
          <div key={`connection-${i}`} className="flex flex-col items-center">
            <ChevronRight className="text-green-400 mx-1" />
            {connection && (
              <span className="text-xs text-green-300 max-w-32 truncate">{connection.description}</span>
            )}
          </div>
        );
      }
    }

    return connections;
  };

  return (
    <div className="w-full bg-emerald-900 bg-opacity-70 rounded-lg p-4 mb-6 animate-fade-in">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white font-semibold">Current Path</h2>
        <button 
          onClick={onClearPath}
          className="text-sm text-green-400 hover:text-green-300 transition-colors"
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
          <span className="text-green-400 font-bold">{path.length - 1}</span> connections
        </span>
      </div>
    </div>
  );
};

export default ConnectionPath;
