
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, X } from "lucide-react";
import ActorCard from "./ActorCard";
import ConnectionPath from "./ConnectionPath";
import GameControls from "./GameControls";
import ElementCard from "./ElementCard";
import ConnectionDescription from "./ConnectionDescription";
import { 
  Element, 
  Connection,
  getConnectedElements, 
  findConnection, 
  getRandomElementChallenge 
} from "@/data/elementsData";

const GameBoard = () => {
  const { toast } = useToast();
  const [startElement, setStartElement] = useState<Element | null>(null);
  const [targetElement, setTargetElement] = useState<Element | null>(null);
  const [currentElement, setCurrentElement] = useState<Element | null>(null);
  const [path, setPath] = useState<Element[]>([]);
  const [connectedElements, setConnectedElements] = useState<Element[]>([]);
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize game on mount
  useEffect(() => {
    startNewGame();
  }, []);

  // Update connected elements when current element changes
  useEffect(() => {
    if (currentElement) {
      const connected = getConnectedElements(currentElement.id);
      
      // Filter out elements already in the path
      const pathElementIds = path.map(element => element.id);
      const filteredConnected = connected.filter(element => !pathElementIds.includes(element.id));
      setConnectedElements(filteredConnected);
      setSelectedConnection(null);
    }
  }, [currentElement, path]);

  const startNewGame = () => {
    const { start, target } = getRandomElementChallenge();
    setStartElement(start);
    setTargetElement(target);
    setCurrentElement(start);
    setPath([start]);
    setConnectedElements([]);
    setSelectedConnection(null);
    setGameComplete(false);
  };

  const handleElementSelect = (element: Element) => {
    if (gameComplete) return;
    
    if (currentElement) {
      // Check if the selected element is connected to the current element
      const isConnected = connectedElements.some(e => e.id === element.id);
      
      if (isConnected) {
        // Find the connection between the current and selected elements
        const connection = findConnection(currentElement.id, element.id);
        
        // Add the element to the path
        setPath([...path, element]);
        setCurrentElement(element);
        setSelectedConnection(connection || null);
        
        // Check if we've reached the target
        if (element.id === targetElement?.id) {
          handleGameComplete();
        }
      }
    }
  };

  const handleConnectionSelect = (element: Element) => {
    if (currentElement) {
      const connection = findConnection(currentElement.id, element.id);
      setSelectedConnection(connection || null);
    }
  };

  const handleClearPath = () => {
    if (startElement) {
      setPath([startElement]);
      setCurrentElement(startElement);
      setSelectedConnection(null);
      setGameComplete(false);
    }
  };

  const handleCheckPath = () => {
    if (path.length > 1) {
      // Check if the path is valid (each element is connected to the next)
      let isPathValid = true;
      
      for (let i = 0; i < path.length - 1; i++) {
        const currentElement = path[i];
        const nextElement = path[i + 1];
        
        const connection = findConnection(currentElement.id, nextElement.id);
        if (!connection) {
          isPathValid = false;
          break;
        }
      }
      
      if (isPathValid) {
        const connections = path.length - 1;
        toast({
          title: `Path is valid!`,
          description: `You've created a valid connection with ${connections} link${connections !== 1 ? 's' : ''}.`,
        });
      } else {
        toast({
          title: "Invalid path",
          description: "Some elements in your path aren't directly connected.",
          variant: "destructive"
        });
      }
    } else {
      toast({
        title: "Path too short",
        description: "You need to connect more elements to form a valid path.",
        variant: "destructive"
      });
    }
  };

  const handleGameComplete = () => {
    setGameComplete(true);
    const score = path.length - 1;
    
    let message = "";
    if (score <= 2) {
      message = "Impressive! You found a very short path!";
    } else if (score <= 4) {
      message = "Well done! That's a good connection!";
    } else {
      message = "You made it! Can you find a shorter path?";
    }
    
    toast({
      title: `Challenge Complete!`,
      description: `${message} ${score} link${score !== 1 ? 's' : ''} used.`,
    });
  };

  const handleNewGame = (start: Element, target: Element) => {
    setStartElement(start);
    setTargetElement(target);
    setCurrentElement(start);
    setPath([start]);
    setConnectedElements([]);
    setSelectedConnection(null);
    setGameComplete(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Game Controls */}
      <GameControls 
        onNewGame={() => startNewGame()}
        onCheckPath={handleCheckPath}
        pathLength={path.length - 1}
        isComplete={gameComplete}
      />

      {/* Connection Path Visualization */}
      <ConnectionPath 
        path={path} 
        onClearPath={handleClearPath} 
      />

      {/* Challenge Display */}
      <div className="mb-6 bg-emerald-900 bg-opacity-70 rounded-lg p-4 animate-fade-in">
        <h2 className="text-white font-semibold mb-4">Your Challenge</h2>
        
        <div className="flex items-center justify-center space-x-4">
          {startElement && (
            <ActorCard 
              name={startElement.name}
              imageUrl={startElement.imageUrl}
              isStart={true}
              size="large"
            />
          )}
          
          <div className="flex-1 flex items-center justify-center">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <span className="mx-4 text-green-400 font-bold">to</span>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-green-400 via-green-400 to-transparent"></div>
          </div>
          
          {targetElement && (
            <ActorCard 
              name={targetElement.name}
              imageUrl={targetElement.imageUrl}
              isTarget={true}
              size="large"
            />
          )}
        </div>
      </div>

      {/* Selected Connection Description */}
      {selectedConnection && (
        <div className="mb-6 animate-fade-in">
          <ConnectionDescription connection={selectedConnection} />
        </div>
      )}

      {/* Game Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Connected Elements */}
        <div className="bg-emerald-900 bg-opacity-70 rounded-lg p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold">Connected Elements</h2>
            <div className="text-sm text-green-400">
              {currentElement && (
                <span>Current: {currentElement.name}</span>
              )}
            </div>
          </div>
          
          {connectedElements.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 overflow-y-auto max-h-[400px] p-2">
              {connectedElements.map(element => (
                <ElementCard 
                  key={element.id}
                  name={element.name}
                  category={element.category}
                  imageUrl={element.imageUrl}
                  onClick={() => {
                    handleElementSelect(element);
                    handleConnectionSelect(element);
                  }}
                  isSelected={selectedConnection?.elementIds.includes(element.id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-gray-400">
              <p>{currentElement ? "No connected elements available" : "Select an element to see connections"}</p>
            </div>
          )}
        </div>
        
        {/* Connection Description and Path Information */}
        <div className="bg-emerald-900 bg-opacity-70 rounded-lg p-4 animate-fade-in">
          <h2 className="text-white font-semibold mb-4">Element Information</h2>
          
          {currentElement ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <ElementCard 
                  name={currentElement.name}
                  category={currentElement.category}
                  imageUrl={currentElement.imageUrl}
                />
                <div className="text-white">
                  <h3 className="text-lg font-medium">{currentElement.name}</h3>
                  <p className="text-sm text-gray-300 capitalize">{currentElement.category}</p>
                  {currentElement.description && (
                    <p className="mt-2 text-sm">{currentElement.description}</p>
                  )}
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-2">Connection Tips:</h4>
                <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
                  <li>Think about how this element interacts with others in nature</li>
                  <li>Consider food chains and ecosystems</li>
                  <li>Remember weather impacts all living things</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-gray-400">
              <p>Select an element to see information</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
