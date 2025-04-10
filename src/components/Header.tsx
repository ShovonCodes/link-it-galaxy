
import { Film } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 flex justify-center items-center bg-gradient-to-r from-cinema-darkPurple to-black">
      <div className="flex items-center gap-3 animate-fade-in">
        <Film className="h-8 w-8 text-cinema-purple" />
        <h1 className="text-3xl font-bold text-white">
          <span className="text-cinema-purple">Movie</span>Connect
        </h1>
      </div>
    </header>
  );
};

export default Header;
