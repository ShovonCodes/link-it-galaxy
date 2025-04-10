
import { Connection } from "@/data/elementsData";

interface ConnectionDescriptionProps {
  connection: Connection | null;
}

const ConnectionDescription = ({ connection }: ConnectionDescriptionProps) => {
  if (!connection) {
    return null;
  }

  return (
    <div className="bg-green-900 bg-opacity-50 p-3 rounded-md shadow-lg border border-green-800 animate-fade-in">
      <p className="text-green-100 text-center">{connection.description}</p>
    </div>
  );
};

export default ConnectionDescription;
