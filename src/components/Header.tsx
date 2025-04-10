
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 flex justify-center items-center bg-gradient-to-r from-green-800 to-emerald-900">
      <div className="flex items-center gap-3 animate-fade-in">
        <Leaf className="h-8 w-8 text-green-400" />
        <h1 className="text-3xl font-bold text-white">
          <span className="text-green-400">Nature</span>Connect
        </h1>
      </div>
    </header>
  );
};

export default Header;
