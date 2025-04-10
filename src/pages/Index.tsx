
import Header from "@/components/Header";
import GameBoard from "@/components/GameBoard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          <GameBoard />
        </div>
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm">
        <p>Movie connections game inspired by Six Degrees of Kevin Bacon</p>
      </footer>
    </div>
  );
};

export default Index;
