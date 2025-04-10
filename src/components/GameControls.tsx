
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getRandomElementChallenge } from "@/data/elementsData";
import { Element } from "@/data/elementsData";
import { useToast } from "@/components/ui/use-toast";

interface GameControlsProps {
  onNewGame: () => void;
  onCheckPath: () => void;
  pathLength: number;
  isComplete: boolean;
}

const GameControls = ({ 
  onNewGame, 
  onCheckPath, 
  pathLength, 
  isComplete 
}: GameControlsProps) => {
  const { toast } = useToast();
  const [difficultyLevel, setDifficultyLevel] = useState<"easy" | "medium" | "hard">("easy");
  
  const handleNewGame = () => {
    onNewGame();
    
    toast({
      title: "New challenge started!",
      description: "Connect the elements using the fewest possible links.",
    });
  };
  
  const handleCheckPath = () => {
    onCheckPath();
  };
  
  return (
    <div className="w-full bg-emerald-900 bg-opacity-70 rounded-lg p-4 mb-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col space-y-2">
          <span className="text-white text-sm font-medium">Difficulty</span>
          <div className="flex space-x-2">
            <Button
              variant={difficultyLevel === "easy" ? "default" : "outline"}
              onClick={() => setDifficultyLevel("easy")}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Easy
            </Button>
            <Button
              variant={difficultyLevel === "medium" ? "default" : "outline"}
              onClick={() => setDifficultyLevel("medium")}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Medium
            </Button>
            <Button
              variant={difficultyLevel === "hard" ? "default" : "outline"}
              onClick={() => setDifficultyLevel("hard")}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Hard
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <span className="text-white text-sm font-medium">Current Score</span>
          <div className="bg-emerald-900 border border-green-600 rounded-lg p-2 text-center">
            <span className="text-xl font-bold text-white">
              {isComplete ? (
                <span className="text-green-400">
                  {pathLength} {pathLength === 1 ? "link" : "links"}
                </span>
              ) : (
                <span className="text-green-400">
                  {pathLength} {pathLength === 1 ? "link" : "links"}
                </span>
              )}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <span className="text-white text-sm font-medium">Game Controls</span>
          <div className="flex space-x-2">
            <Button 
              onClick={handleNewGame}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              New Game
            </Button>
            <Button 
              onClick={handleCheckPath}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              disabled={isComplete}
            >
              Check Path
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameControls;
