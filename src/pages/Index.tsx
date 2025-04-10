
import Header from "@/components/Header";
import GameBoard from "@/components/GameBoard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-900 to-emerald-950">
      <Header />
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          <GameBoard />
        </div>
      </main>
      <footer className="py-4 text-center text-green-300 text-sm">
        <p>Natural elements connection game - Find the hidden links in nature!</p>
      </footer>
    </div>
  );
};

export default Index;
