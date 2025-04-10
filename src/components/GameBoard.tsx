
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ChevronRight, X } from "lucide-react";
import ActorCard from "./ActorCard";
import ConnectionPath from "./ConnectionPath";
import GameControls from "./GameControls";
import { 
  Actor, 
  Movie, 
  getConnectedActors, 
  findConnectingMovie, 
  getRandomActorChallenge 
} from "@/data/movieData";
import MovieCard from "./MovieCard";

const GameBoard = () => {
  const { toast } = useToast();
  const [startActor, setStartActor] = useState<Actor | null>(null);
  const [targetActor, setTargetActor] = useState<Actor | null>(null);
  const [currentActor, setCurrentActor] = useState<Actor | null>(null);
  const [path, setPath] = useState<Actor[]>([]);
  const [connectedActors, setConnectedActors] = useState<Actor[]>([]);
  const [connectingMovies, setConnectingMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize game on mount
  useEffect(() => {
    startNewGame();
  }, []);

  // Update connected actors when current actor changes
  useEffect(() => {
    if (currentActor) {
      const connected = getConnectedActors(currentActor.id);
      setConnectedActors(connected);
      
      // Filter out actors already in the path
      const pathActorIds = path.map(actor => actor.id);
      const filteredConnected = connected.filter(actor => !pathActorIds.includes(actor.id));
      setConnectedActors(filteredConnected);
      
      // Find movies that connect the current actor to other actors
      if (filteredConnected.length > 0) {
        const movies: Movie[] = [];
        filteredConnected.forEach(actor => {
          const connectingMovie = findConnectingMovie(currentActor.id, actor.id);
          if (connectingMovie && !movies.some(m => m.id === connectingMovie.id)) {
            movies.push(connectingMovie);
          }
        });
        setConnectingMovies(movies);
      } else {
        setConnectingMovies([]);
      }
    }
  }, [currentActor, path]);

  const startNewGame = () => {
    const { start, target } = getRandomActorChallenge();
    setStartActor(start);
    setTargetActor(target);
    setCurrentActor(start);
    setPath([start]);
    setConnectedActors([]);
    setConnectingMovies([]);
    setSelectedMovie(null);
    setGameComplete(false);
  };

  const handleActorSelect = (actor: Actor) => {
    if (gameComplete) return;
    
    if (currentActor) {
      // Check if the selected actor is connected to the current actor
      const isConnected = connectedActors.some(a => a.id === actor.id);
      
      if (isConnected) {
        // Add the actor to the path
        setPath([...path, actor]);
        setCurrentActor(actor);
        setSelectedMovie(null);
        
        // Check if we've reached the target
        if (actor.id === targetActor?.id) {
          handleGameComplete();
        }
      }
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    
    // Filter connected actors to show only those in this movie
    const actorsInMovie = connectedActors.filter(actor => 
      movie.cast.includes(actor.id)
    );
    setConnectedActors(actorsInMovie);
  };

  const handleClearPath = () => {
    if (startActor) {
      setPath([startActor]);
      setCurrentActor(startActor);
      setSelectedMovie(null);
      setGameComplete(false);
    }
  };

  const handleCheckPath = () => {
    if (path.length > 1) {
      // Check if the path is valid (each actor is connected to the next)
      let isPathValid = true;
      
      for (let i = 0; i < path.length - 1; i++) {
        const currentActor = path[i];
        const nextActor = path[i + 1];
        
        const connectingMovie = findConnectingMovie(currentActor.id, nextActor.id);
        if (!connectingMovie) {
          isPathValid = false;
          break;
        }
      }
      
      if (isPathValid) {
        const degrees = path.length - 1;
        toast({
          title: `Path is valid!`,
          description: `You've created a valid connection with ${degrees} degree${degrees !== 1 ? 's' : ''} of separation.`,
        });
      } else {
        toast({
          title: "Invalid path",
          description: "Some actors in your path haven't appeared in movies together.",
          variant: "destructive"
        });
      }
    } else {
      toast({
        title: "Path too short",
        description: "You need to connect more actors to form a valid path.",
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
      description: `${message} ${score} degree${score !== 1 ? 's' : ''} of separation.`,
    });
  };

  const handleNewGame = (start: Actor, target: Actor) => {
    setStartActor(start);
    setTargetActor(target);
    setCurrentActor(start);
    setPath([start]);
    setConnectedActors([]);
    setConnectingMovies([]);
    setSelectedMovie(null);
    setGameComplete(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Game Controls */}
      <GameControls 
        onNewGame={handleNewGame}
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
      <div className="mb-6 bg-cinema-darkPurple rounded-lg p-4 animate-fade-in">
        <h2 className="text-white font-semibold mb-4">Your Challenge</h2>
        
        <div className="flex items-center justify-center space-x-4">
          {startActor && (
            <ActorCard 
              name={startActor.name}
              imageUrl={startActor.imageUrl}
              isStart={true}
              size="large"
            />
          )}
          
          <div className="flex-1 flex items-center justify-center">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-cinema-purple to-transparent"></div>
            <span className="mx-4 text-cinema-purple font-bold">to</span>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-cinema-purple via-cinema-purple to-transparent"></div>
          </div>
          
          {targetActor && (
            <ActorCard 
              name={targetActor.name}
              imageUrl={targetActor.imageUrl}
              isTarget={true}
              size="large"
            />
          )}
        </div>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Movies */}
        <div className="bg-cinema-darkPurple rounded-lg p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold">Available Movies</h2>
            {selectedMovie && (
              <button 
                onClick={() => {
                  setSelectedMovie(null);
                  if (currentActor) {
                    const connected = getConnectedActors(currentActor.id);
                    setConnectedActors(connected);
                  }
                }}
                className="text-sm text-cinema-purple hover:text-cinema-lightPurple transition-colors flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Clear Selection
              </button>
            )}
          </div>
          
          {connectingMovies.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-[400px] p-2">
              {connectingMovies.map(movie => (
                <MovieCard 
                  key={movie.id}
                  title={movie.title}
                  year={movie.year}
                  imageUrl={movie.imageUrl}
                  onClick={() => handleMovieSelect(movie)}
                  isSelected={selectedMovie?.id === movie.id}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-gray-400">
              <p>{currentActor ? "No available movies found" : "Select an actor to see available movies"}</p>
            </div>
          )}
        </div>
        
        {/* Available Actors */}
        <div className="bg-cinema-darkPurple rounded-lg p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold">
              {selectedMovie 
                ? `Actors in "${selectedMovie.title}"`
                : "Connected Actors"
              }
            </h2>
            <div className="text-sm text-cinema-purple">
              {currentActor && (
                <span>Current: {currentActor.name}</span>
              )}
            </div>
          </div>
          
          {connectedActors.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 overflow-y-auto max-h-[400px] p-2">
              {connectedActors.map(actor => (
                <ActorCard 
                  key={actor.id}
                  name={actor.name}
                  imageUrl={actor.imageUrl}
                  onClick={() => handleActorSelect(actor)}
                  isTarget={actor.id === targetActor?.id}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-[200px] text-gray-400">
              <p>{currentActor ? "No connected actors available" : "Select an actor to see connections"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
