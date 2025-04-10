
import { cn } from "@/lib/utils";

interface ActorCardProps {
  name: string;
  imageUrl: string;
  isSelected?: boolean;
  isStart?: boolean;
  isTarget?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const ActorCard = ({
  name,
  imageUrl,
  isSelected = false,
  isStart = false,
  isTarget = false,
  onClick,
  size = "medium"
}: ActorCardProps) => {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };
  
  const textSizeClasses = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base"
  };

  return (
    <div 
      className={cn(
        "actor-card flex flex-col items-center cursor-pointer group",
        isSelected && "ring-4 ring-cinema-accent"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <div 
          className={cn(
            "rounded-full overflow-hidden mb-2",
            sizeClasses[size],
            isSelected && "ring-4 ring-cinema-accent"
          )}
        >
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {isStart && (
          <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            S
          </div>
        )}
        
        {isTarget && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            T
          </div>
        )}
      </div>
      
      <p className={cn(
        "text-center font-medium text-white mt-1 max-w-[120px] truncate",
        textSizeClasses[size]
      )}>
        {name}
      </p>
    </div>
  );
};

export default ActorCard;
