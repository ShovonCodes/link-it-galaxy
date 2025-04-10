
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getRandomActorChallenge } from "@/data/movieData";
import { Actor } from "@/data/movieData";
import { useToast } from "@/components/ui/use-toast";

interface GameControlsProps {
  onNewGame: (start: Actor, target: Actor) => void;
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
    const challenge = getRandomActorChallenge();
    onNewGame(challenge.start, challenge.target);
    
    toast({
      title: "New challenge started!",
      description: `Connect ${challenge.start.name} to ${challenge.target.name} using the fewest possible moves.`,
    });
  };
  
  const handleCheckPath = () => {
    onCheckPath();
  };
  
  return (
    <div className="w-full bg-cinema-darkPurple rounded-lg p-4 mb-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col space-y-2">
          <span className="text-white text-sm font-medium">Difficulty</span>
          <div className="flex space-x-2">
            <Button
              variant={difficultyLevel === "easy" ? "default" : "outline"}
              onClick={() => setDifficultyLevel("easy")}
              className="flex-1 bg-cinema-purple hover:bg-cinema-accent text-white"
            >
              Easy
            </Button>
            <Button
              variant={difficultyLevel === "medium" ? "default" : "outline"}
              onClick={() => setDifficultyLevel("medium")}
              className="flex-1 bg-cinema-purple hover:bg-cinema-accent text-white"
            >
              Medium
            </Button>
            <Button
              variant={difficultyLevel === "hard" ? "default" : "outline"}
              onClick={() => setDifficultyLevel("hard")}
              className="flex-1 bg-cinema-purple hover:bg-cinema-accent text-white"
            >
              Hard
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <span className="text-white text-sm font-medium">Current Score</span>
          <div className="bg-cinema-darkPurple border border-cinema-purple rounded-lg p-2 text-center">
            <span className="text-xl font-bold text-white">
              {isComplete ? (
                <span className="text-green-400">
                  {pathLength} {pathLength === 1 ? "move" : "moves"}
                </span>
              ) : (
                <span className="text-cinema-purple">
                  {pathLength} {pathLength === 1 ? "move" : "moves"}
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
              className="flex-1 bg-cinema-purple hover:bg-cinema-accent text-white"
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
