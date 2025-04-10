
import { cn } from "@/lib/utils";
import { ElementCategory } from "@/data/elementsData";
import { 
  Leaf, Cloud, Apple, Mountain, Fish, Bird, 
  Tree, Flower, Cherry, Wheat, Cup, 
  Droplet, Shell, Snowflake, Sun, Wind, Rainbow 
} from "lucide-react";
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

  const getElementIcon = () => {
    // Choose specific icon based on element name first
    switch (name.toLowerCase()) {
      // Animals
      case "wolf": return <Fish className="w-12 h-12 text-gray-400" />;
      case "sheep": return <Fish className="w-12 h-12 text-gray-200" />;
      case "bird": return <Bird className="w-12 h-12 text-sky-400" />;
      case "fish": return <Fish className="w-12 h-12 text-blue-400" />;
      case "bee": return <Leaf className="w-12 h-12 text-yellow-400" />;
      case "butterfly": return <Flower className="w-10 h-10 text-pink-400" />;
      case "frog": return <Fish className="w-12 h-12 text-green-500" />;
      case "bear": return <Fish className="w-12 h-12 text-brown-400" />;
      case "deer": return <Fish className="w-12 h-12 text-amber-600" />;
      case "owl": return <Bird className="w-12 h-12 text-amber-800" />;
      
      // Plants
      case "grass": return <Wheat className="w-12 h-12 text-green-500" />;
      case "tree": return <Tree className="w-12 h-12 text-green-700" />;
      case "flower": return <Flower className="w-12 h-12 text-pink-500" />;
      case "moss": return <Leaf className="w-12 h-12 text-green-600" />;
      case "fern": return <Leaf className="w-12 h-12 text-green-500" />;
      case "cactus": return <Leaf className="w-12 h-12 text-green-600" />;
      case "pine tree": return <Tree className="w-12 h-12 text-green-800" />;
      case "seaweed": return <Leaf className="w-12 h-12 text-teal-600" />;
      
      // Food
      case "apple": return <Apple className="w-12 h-12 text-red-500" />;
      case "honey": return <Cup className="w-12 h-12 text-amber-400" />;
      case "mushroom": return <Leaf className="w-12 h-12 text-stone-400" />;
      case "berry": return <Cherry className="w-12 h-12 text-red-600" />;
      case "nut": return <Cherry className="w-12 h-12 text-amber-800" />;
      case "grain": return <Wheat className="w-12 h-12 text-amber-300" />;
      case "nectar": return <Cup className="w-12 h-12 text-yellow-300" />;
      
      // Minerals
      case "water": return <Droplet className="w-12 h-12 text-blue-500" />;
      case "soil": return <Mountain className="w-12 h-12 text-amber-800" />;
      case "rock": return <Mountain className="w-12 h-12 text-gray-500" />;
      case "sand": return <Mountain className="w-12 h-12 text-yellow-200" />;
      case "clay": return <Mountain className="w-12 h-12 text-orange-300" />;
      case "salt": return <Snowflake className="w-12 h-12 text-gray-100" />;
      case "ice": return <Snowflake className="w-12 h-12 text-blue-100" />;
      
      // Weather
      case "rain": return <Cloud className="w-12 h-12 text-blue-400" />;
      case "cloud": return <Cloud className="w-12 h-12 text-gray-300" />;
      case "sun": return <Sun className="w-12 h-12 text-yellow-400" />;
      case "snow": return <Snowflake className="w-12 h-12 text-blue-100" />;
      case "wind": return <Wind className="w-12 h-12 text-sky-300" />;
      case "lightning": return <Cloud className="w-12 h-12 text-yellow-500" />;
      case "rainbow": return <Rainbow className="w-12 h-12 text-violet-400" />;
      case "fog": return <Cloud className="w-12 h-12 text-gray-200" />;
      
      // Default to category icons if no specific icon
      default: return getCategoryIcon();
    }
  };

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

  const getCategoryBgColor = () => {
    switch (category) {
      case "animal": return "bg-blue-900";
      case "plant": return "bg-green-900";
      case "food": return "bg-red-900";
      case "mineral": return "bg-gray-800";
      case "weather": return "bg-sky-900";
      default: return "bg-emerald-900";
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
        <div className={`w-full h-full ${getCategoryBgColor()} flex items-center justify-center`}>
          {getElementIcon()}
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
