
// Different categories of elements
export type ElementCategory = "animal" | "plant" | "food" | "mineral" | "weather";

// Base element interface
export interface Element {
  id: string;
  name: string;
  category: ElementCategory;
  imageUrl: string;
  description?: string;
}

// Connection between elements
export interface Connection {
  id: string;
  elementIds: [string, string]; // The two elements that are connected
  description: string; // Describes how the elements are connected
}

// Sample elements data
const elements: Element[] = [
  {
    id: "wolf",
    name: "Wolf",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A large predatory canine"
  },
  {
    id: "sheep",
    name: "Sheep",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A domesticated ruminant animal"
  },
  {
    id: "grass",
    name: "Grass",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1575411302855-6cdc8e49d714?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A common plant with narrow leaves"
  },
  {
    id: "water",
    name: "Water",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1548222606-6c4f581fd09d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Essential liquid for life"
  },
  {
    id: "rain",
    name: "Rain",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Water falling from clouds"
  },
  {
    id: "cloud",
    name: "Cloud",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Visible mass of water droplets in the atmosphere"
  },
  {
    id: "apple",
    name: "Apple",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A round fruit with red, yellow, or green skin"
  },
  {
    id: "tree",
    name: "Tree",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A large woody perennial plant"
  },
  {
    id: "soil",
    name: "Soil",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1566813999022-d229b850deab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The upper layer of earth containing nutrients"
  },
  {
    id: "sun",
    name: "Sun",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The star at the center of our solar system"
  },
  {
    id: "bird",
    name: "Bird",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A warm-blooded egg-laying vertebrate"
  },
  {
    id: "fish",
    name: "Fish",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1545816250-e12bedba42ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "An aquatic vertebrate animal"
  },
  {
    id: "honey",
    name: "Honey",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A sweet, viscous food substance produced by bees"
  },
  {
    id: "bee",
    name: "Bee",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A flying insect that collects nectar and pollen"
  },
  {
    id: "flower",
    name: "Flower",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The reproductive structure of plants"
  },
];

// Sample connections data
const connections: Connection[] = [
  {
    id: "wolf-sheep",
    elementIds: ["wolf", "sheep"],
    description: "Wolf preys on sheep"
  },
  {
    id: "sheep-grass",
    elementIds: ["sheep", "grass"],
    description: "Sheep eats grass"
  },
  {
    id: "grass-water",
    elementIds: ["grass", "water"],
    description: "Grass needs water to grow"
  },
  {
    id: "water-rain",
    elementIds: ["water", "rain"],
    description: "Rain is falling water"
  },
  {
    id: "rain-cloud",
    elementIds: ["rain", "cloud"],
    description: "Rain falls from clouds"
  },
  {
    id: "apple-tree",
    elementIds: ["apple", "tree"],
    description: "Apples grow on trees"
  },
  {
    id: "tree-soil",
    elementIds: ["tree", "soil"],
    description: "Trees grow in soil"
  },
  {
    id: "soil-water",
    elementIds: ["soil", "water"],
    description: "Soil contains water"
  },
  {
    id: "tree-sun",
    elementIds: ["tree", "sun"],
    description: "Trees need sunlight to grow"
  },
  {
    id: "bird-tree",
    elementIds: ["bird", "tree"],
    description: "Birds build nests in trees"
  },
  {
    id: "fish-water",
    elementIds: ["fish", "water"],
    description: "Fish live in water"
  },
  {
    id: "bee-honey",
    elementIds: ["bee", "honey"],
    description: "Bees produce honey"
  },
  {
    id: "bee-flower",
    elementIds: ["bee", "flower"],
    description: "Bees collect pollen from flowers"
  },
  {
    id: "flower-tree",
    elementIds: ["flower", "tree"],
    description: "Trees can have flowers"
  },
  {
    id: "flower-soil",
    elementIds: ["flower", "soil"],
    description: "Flowers grow in soil"
  },
  {
    id: "sun-plant",
    elementIds: ["sun", "grass"],
    description: "Plants need sunlight for photosynthesis"
  },
];

// Get all elements
export const getAllElements = (): Element[] => {
  return elements;
};

// Get an element by ID
export const getElementById = (id: string): Element | undefined => {
  return elements.find(element => element.id === id);
};

// Get elements by category
export const getElementsByCategory = (category: ElementCategory): Element[] => {
  return elements.filter(element => element.category === category);
};

// Get all connections
export const getAllConnections = (): Connection[] => {
  return connections;
};

// Get connections for a specific element
export const getConnectionsForElement = (elementId: string): Connection[] => {
  return connections.filter(connection => 
    connection.elementIds.includes(elementId)
  );
};

// Get connected elements for a specific element
export const getConnectedElements = (elementId: string): Element[] => {
  const connectedIds = connections
    .filter(connection => connection.elementIds.includes(elementId))
    .flatMap(connection => connection.elementIds)
    .filter(id => id !== elementId);
  
  // Remove duplicates
  const uniqueIds = [...new Set(connectedIds)];
  
  return uniqueIds.map(id => getElementById(id)!).filter(Boolean);
};

// Find the connection between two elements
export const findConnection = (elementId1: string, elementId2: string): Connection | undefined => {
  return connections.find(connection => 
    (connection.elementIds[0] === elementId1 && connection.elementIds[1] === elementId2) ||
    (connection.elementIds[0] === elementId2 && connection.elementIds[1] === elementId1)
  );
};

// Get a random pair of elements for a challenge
export const getRandomElementChallenge = (): { start: Element, target: Element } => {
  // Get two random elements that are at least 3 connections apart
  const allElements = getAllElements();
  let start, target;
  
  do {
    const randomIndices = getRandomIndices(allElements.length, 2);
    start = allElements[randomIndices[0]];
    target = allElements[randomIndices[1]];
  } while (areDirectlyConnected(start.id, target.id));
  
  return { start, target };
};

// Helper function to get N random indices
const getRandomIndices = (max: number, count: number): number[] => {
  const indices: number[] = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * max);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices;
};

// Check if two elements are directly connected
const areDirectlyConnected = (elementId1: string, elementId2: string): boolean => {
  return !!findConnection(elementId1, elementId2);
};
