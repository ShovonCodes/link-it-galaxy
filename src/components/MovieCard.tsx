
import { cn } from "@/lib/utils";
import { Film } from "lucide-react";

interface MovieCardProps {
  title: string;
  year: number;
  imageUrl: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const MovieCard = ({
  title,
  year,
  imageUrl,
  onClick,
  isSelected = false
}: MovieCardProps) => {
  return (
    <div 
      className={cn(
        "movie-card relative w-32 h-48 rounded-md overflow-hidden cursor-pointer",
        isSelected && "ring-2 ring-cinema-accent"
      )}
      onClick={onClick}
    >
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-cinema-darkPurple flex items-center justify-center">
          <Film className="w-12 h-12 text-cinema-purple" />
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70">
        <h3 className="text-white text-sm font-medium truncate">{title}</h3>
        <p className="text-gray-300 text-xs">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
