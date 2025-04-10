
import { cn } from "@/lib/utils";
import { ElementCategory } from "@/data/elementsData";
import { Leaf, Cloud, Apple, Mountain, Fish } from "lucide-react";
import { useState } from "react";

interface ElementCardProps {
  name: string;
  category: ElementCategory;
  imageUrl: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ElementCard = ({
  name,
  category,
  imageUrl,
  onClick,
  isSelected = false
}: ElementCardProps) => {
  const [imageError, setImageError] = useState(false);

  const getCategoryIcon = () => {
    switch (category) {
      case "animal":
        return <Fish className="w-12 h-12 text-blue-400" />;
      case "plant":
        return <Leaf className="w-12 h-12 text-green-400" />;
      case "food":
        return <Apple className="w-12 h-12 text-red-400" />;
      case "mineral":
        return <Mountain className="w-12 h-12 text-gray-400" />;
      case "weather":
        return <Cloud className="w-12 h-12 text-sky-400" />;
      default:
        return <Leaf className="w-12 h-12 text-green-400" />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "animal": return "ring-blue-400";
      case "plant": return "ring-green-400";
      case "food": return "ring-red-400";
      case "mineral": return "ring-gray-400";
      case "weather": return "ring-sky-400";
      default: return "ring-green-400";
    }
  };

  return (
    <div 
      className={cn(
        "element-card relative w-32 h-48 rounded-md overflow-hidden cursor-pointer transition-all",
        isSelected && `ring-2 ${getCategoryColor()}`
      )}
      onClick={onClick}
    >
      {imageUrl && !imageError ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-emerald-900 flex items-center justify-center">
          {getCategoryIcon()}
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70">
        <h3 className="text-white text-sm font-medium truncate">{name}</h3>
        <p className="text-gray-300 text-xs capitalize">{category}</p>
      </div>
    </div>
  );
};

export default ElementCard;
