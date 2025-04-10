
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
  // ANIMALS
  {
    id: "wolf",
    name: "Wolf",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A large predatory canine that lives in packs"
  },
  {
    id: "sheep",
    name: "Sheep",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A domesticated ruminant animal with a thick woolly coat"
  },
  {
    id: "bird",
    name: "Bird",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A warm-blooded egg-laying vertebrate with wings and feathers"
  },
  {
    id: "fish",
    name: "Fish",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1545816250-e12bedba42ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "An aquatic vertebrate animal that breathes through gills"
  },
  {
    id: "bee",
    name: "Bee",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1611001716885-b3402558a62b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A flying insect that collects nectar and pollen"
  },
  {
    id: "butterfly",
    name: "Butterfly",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1550005558-1e0f9e8f0c96?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "An insect with colorful wings that undergoes metamorphosis"
  },
  {
    id: "frog",
    name: "Frog",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1629897881925-c1bfde4fb5aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "An amphibian that starts life as a tadpole in water"
  },
  {
    id: "bear",
    name: "Bear",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A large omnivorous mammal with thick fur"
  },
  {
    id: "deer",
    name: "Deer",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1516128701092-eabab8a12be9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A hoofed mammal with antlers that lives in forests"
  },
  {
    id: "owl",
    name: "Owl",
    category: "animal",
    imageUrl: "https://images.unsplash.com/photo-1560113513-b08ef846217c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A nocturnal bird of prey with large eyes and a hooked beak"
  },
  
  // PLANTS
  {
    id: "grass",
    name: "Grass",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1575411302855-6cdc8e49d714?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A common plant with narrow leaves growing from the base"
  },
  {
    id: "tree",
    name: "Tree",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A large woody perennial plant with a trunk and branches"
  },
  {
    id: "flower",
    name: "Flower",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The reproductive structure of plants"
  },
  {
    id: "moss",
    name: "Moss",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A small flowerless plant that grows in dense green clumps"
  },
  {
    id: "fern",
    name: "Fern",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1597307770184-97548531ae92?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A flowerless plant with divided leaves"
  },
  {
    id: "cactus",
    name: "Cactus",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1530482054429-cc491f61333b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A succulent plant adapted to dry conditions with spines"
  },
  {
    id: "pine",
    name: "Pine Tree",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1502726299822-6f583f972e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "An evergreen coniferous tree with needle-like leaves"
  },
  {
    id: "seaweed",
    name: "Seaweed",
    category: "plant",
    imageUrl: "https://images.unsplash.com/photo-1596130393069-83d439e9e0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Marine algae that grows in the ocean"
  },
  
  // FOOD
  {
    id: "apple",
    name: "Apple",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A round fruit with red, yellow, or green skin"
  },
  {
    id: "honey",
    name: "Honey",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A sweet, viscous food substance produced by bees"
  },
  {
    id: "mushroom",
    name: "Mushroom",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1552825896-a67dbcbccb5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The fleshy, spore-bearing body of a fungus"
  },
  {
    id: "berry",
    name: "Berry",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1563746924237-f81657aaf4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A small, pulpy, edible fruit"
  },
  {
    id: "nut",
    name: "Nut",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1543208541-0961a29a846d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A hard-shelled fruit containing an edible kernel"
  },
  {
    id: "grain",
    name: "Grain",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1536576382538-1b99a331dba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The harvested seeds of grass-like crops such as wheat"
  },
  {
    id: "nectar",
    name: "Nectar",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1561988679-3360d9c88eed?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A sugar-rich liquid produced by plants to attract pollinators"
  },
  
  // MINERALS
  {
    id: "water",
    name: "Water",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1548222606-6c4f581fd09d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Essential liquid required for life on Earth"
  },
  {
    id: "soil",
    name: "Soil",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1566813999022-d229b850deab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The upper layer of earth containing nutrients"
  },
  {
    id: "rock",
    name: "Rock",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1507520413369-94de50facb6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Solid mineral material forming part of the earth's crust"
  },
  {
    id: "sand",
    name: "Sand",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1567016507308-8a5d2a0c983f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Tiny fragments of rock and mineral particles"
  },
  {
    id: "clay",
    name: "Clay",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1584212197305-4bf5a81f94be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Fine-grained natural rock or soil material"
  },
  {
    id: "salt",
    name: "Salt",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1519411792752-25c2468cccb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A crystalline mineral made of sodium chloride"
  },
  {
    id: "ice",
    name: "Ice",
    category: "mineral",
    imageUrl: "https://images.unsplash.com/photo-1573055418049-c8e0b7e3403b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Water frozen into a solid state"
  },
  
  // WEATHER
  {
    id: "rain",
    name: "Rain",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Water falling from clouds in drops"
  },
  {
    id: "cloud",
    name: "Cloud",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Visible mass of water droplets in the atmosphere"
  },
  {
    id: "sun",
    name: "Sun",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The star at the center of our solar system"
  },
  {
    id: "snow",
    name: "Snow",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1511131341083-2cb30282e539?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Precipitation in the form of ice crystals"
  },
  {
    id: "wind",
    name: "Wind",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "The flow of gases on a large scale"
  },
  {
    id: "lightning",
    name: "Lightning",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A natural electrical discharge between clouds and the ground"
  },
  {
    id: "rainbow",
    name: "Rainbow",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1590083948603-b51aa686bb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A meteorological phenomenon caused by reflection of light in water droplets"
  },
  {
    id: "fog",
    name: "Fog",
    category: "weather",
    imageUrl: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "A thick cloud of water droplets suspended in the atmosphere at ground level"
  },
];

// Sample connections data
const connections: Connection[] = [
  // Animal connections
  {
    id: "wolf-sheep",
    elementIds: ["wolf", "sheep"],
    description: "Wolf preys on sheep"
  },
  {
    id: "bear-honey",
    elementIds: ["bear", "honey"],
    description: "Bears eat honey"
  },
  {
    id: "bear-fish",
    elementIds: ["bear", "fish"],
    description: "Bears catch and eat fish"
  },
  {
    id: "bird-tree",
    elementIds: ["bird", "tree"],
    description: "Birds build nests in trees"
  },
  {
    id: "bird-worm",
    elementIds: ["bird", "soil"],
    description: "Birds find worms in soil"
  },
  {
    id: "butterfly-flower",
    elementIds: ["butterfly", "flower"],
    description: "Butterflies pollinate flowers"
  },
  {
    id: "deer-grass",
    elementIds: ["deer", "grass"],
    description: "Deer graze on grass"
  },
  {
    id: "deer-berry",
    elementIds: ["deer", "berry"],
    description: "Deer eat berries"
  },
  {
    id: "fish-water",
    elementIds: ["fish", "water"],
    description: "Fish live in water"
  },
  {
    id: "fish-seaweed",
    elementIds: ["fish", "seaweed"],
    description: "Fish hide in seaweed"
  },
  {
    id: "frog-water",
    elementIds: ["frog", "water"],
    description: "Frogs live near water"
  },
  {
    id: "owl-tree",
    elementIds: ["owl", "tree"],
    description: "Owls nest in trees"
  },
  {
    id: "owl-mouse",
    elementIds: ["owl", "soil"],
    description: "Owls hunt small animals that live in soil"
  },
  {
    id: "bee-flower",
    elementIds: ["bee", "flower"],
    description: "Bees collect pollen from flowers"
  },
  {
    id: "bee-honey",
    elementIds: ["bee", "honey"],
    description: "Bees produce honey"
  },
  {
    id: "bee-nectar",
    elementIds: ["bee", "nectar"],
    description: "Bees collect nectar from flowers"
  },
  
  // Plant connections
  {
    id: "grass-soil",
    elementIds: ["grass", "soil"],
    description: "Grass grows in soil"
  },
  {
    id: "grass-water",
    elementIds: ["grass", "water"],
    description: "Grass needs water to grow"
  },
  {
    id: "grass-sun",
    elementIds: ["grass", "sun"],
    description: "Grass needs sunlight for photosynthesis"
  },
  {
    id: "tree-soil",
    elementIds: ["tree", "soil"],
    description: "Trees grow in soil"
  },
  {
    id: "tree-water",
    elementIds: ["tree", "water"],
    description: "Trees need water to survive"
  },
  {
    id: "tree-sun",
    elementIds: ["tree", "sun"],
    description: "Trees use sunlight for photosynthesis"
  },
  {
    id: "tree-apple",
    elementIds: ["tree", "apple"],
    description: "Apple trees produce apples"
  },
  {
    id: "tree-nut",
    elementIds: ["tree", "nut"],
    description: "Some trees produce nuts"
  },
  {
    id: "flower-soil",
    elementIds: ["flower", "soil"],
    description: "Flowers grow in soil"
  },
  {
    id: "flower-water",
    elementIds: ["flower", "water"],
    description: "Flowers need water to grow"
  },
  {
    id: "flower-sun",
    elementIds: ["flower", "sun"],
    description: "Flowers need sunlight to grow"
  },
  {
    id: "flower-nectar",
    elementIds: ["flower", "nectar"],
    description: "Flowers produce nectar"
  },
  {
    id: "flower-butterfly",
    elementIds: ["flower", "butterfly"],
    description: "Flowers attract butterflies"
  },
  {
    id: "moss-rock",
    elementIds: ["moss", "rock"],
    description: "Moss often grows on rocks"
  },
  {
    id: "moss-water",
    elementIds: ["moss", "water"],
    description: "Moss thrives in damp environments"
  },
  {
    id: "fern-water",
    elementIds: ["fern", "water"],
    description: "Ferns prefer moist environments"
  },
  {
    id: "fern-soil",
    elementIds: ["fern", "soil"],
    description: "Ferns grow in nutrient-rich soil"
  },
  {
    id: "cactus-sand",
    elementIds: ["cactus", "sand"],
    description: "Cacti grow in sandy soil"
  },
  {
    id: "cactus-sun",
    elementIds: ["cactus", "sun"],
    description: "Cacti thrive in sunny conditions"
  },
  {
    id: "pine-soil",
    elementIds: ["pine", "soil"],
    description: "Pine trees grow in soil"
  },
  {
    id: "pine-snow",
    elementIds: ["pine", "snow"],
    description: "Pine trees often endure snow"
  },
  {
    id: "seaweed-water",
    elementIds: ["seaweed", "water"],
    description: "Seaweed grows in water"
  },
  {
    id: "seaweed-salt",
    elementIds: ["seaweed", "salt"],
    description: "Seaweed lives in salty water"
  },
  
  // Food connections
  {
    id: "apple-tree",
    elementIds: ["apple", "tree"],
    description: "Apples grow on trees"
  },
  {
    id: "honey-bee",
    elementIds: ["honey", "bee"],
    description: "Honey is produced by bees"
  },
  {
    id: "berry-bird",
    elementIds: ["berry", "bird"],
    description: "Birds eat berries"
  },
  {
    id: "mushroom-soil",
    elementIds: ["mushroom", "soil"],
    description: "Mushrooms grow in soil"
  },
  {
    id: "mushroom-rain",
    elementIds: ["mushroom", "rain"],
    description: "Mushrooms often appear after rain"
  },
  {
    id: "grain-sun",
    elementIds: ["grain", "sun"],
    description: "Grain crops need sunlight to grow"
  },
  {
    id: "grain-soil",
    elementIds: ["grain", "soil"],
    description: "Grain grows in soil"
  },
  {
    id: "nectar-flower",
    elementIds: ["nectar", "flower"],
    description: "Nectar is produced by flowers"
  },
  
  // Mineral connections
  {
    id: "water-rain",
    elementIds: ["water", "rain"],
    description: "Rain is falling water"
  },
  {
    id: "water-cloud",
    elementIds: ["water", "cloud"],
    description: "Clouds contain water vapor"
  },
  {
    id: "water-ice",
    elementIds: ["water", "ice"],
    description: "Water freezes to become ice"
  },
  {
    id: "water-snow",
    elementIds: ["water", "snow"],
    description: "Snow is frozen water crystals"
  },
  {
    id: "soil-water",
    elementIds: ["soil", "water"],
    description: "Soil contains water"
  },
  {
    id: "soil-clay",
    elementIds: ["soil", "clay"],
    description: "Clay is a component of soil"
  },
  {
    id: "rock-soil",
    elementIds: ["rock", "soil"],
    description: "Rocks break down into soil"
  },
  {
    id: "rock-sand",
    elementIds: ["rock", "sand"],
    description: "Rocks erode into sand"
  },
  {
    id: "sand-water",
    elementIds: ["sand", "water"],
    description: "Sand is often found near water"
  },
  {
    id: "clay-water",
    elementIds: ["clay", "water"],
    description: "Clay becomes malleable when wet"
  },
  {
    id: "salt-water",
    elementIds: ["salt", "water"],
    description: "Salt dissolves in water"
  },
  {
    id: "ice-snow",
    elementIds: ["ice", "snow"],
    description: "Ice and snow are both frozen water"
  },
  
  // Weather connections
  {
    id: "rain-cloud",
    elementIds: ["rain", "cloud"],
    description: "Rain falls from clouds"
  },
  {
    id: "rain-rainbow",
    elementIds: ["rain", "rainbow"],
    description: "Rainbows form when sunlight shines through rain"
  },
  {
    id: "cloud-sun",
    elementIds: ["cloud", "sun"],
    description: "Clouds can block the sun"
  },
  {
    id: "cloud-rain",
    elementIds: ["cloud", "rain"],
    description: "Clouds release rain"
  },
  {
    id: "cloud-snow",
    elementIds: ["cloud", "snow"],
    description: "Clouds release snow"
  },
  {
    id: "sun-rainbow",
    elementIds: ["sun", "rainbow"],
    description: "Sunlight creates rainbows when it passes through water droplets"
  },
  {
    id: "sun-plant",
    elementIds: ["sun", "grass"],
    description: "Plants need sunlight for photosynthesis"
  },
  {
    id: "snow-ice",
    elementIds: ["snow", "ice"],
    description: "Snow can become ice under pressure"
  },
  {
    id: "wind-cloud",
    elementIds: ["wind", "cloud"],
    description: "Wind moves clouds across the sky"
  },
  {
    id: "wind-rain",
    elementIds: ["wind", "rain"],
    description: "Wind can drive rain"
  },
  {
    id: "wind-tree",
    elementIds: ["wind", "tree"],
    description: "Wind sways trees"
  },
  {
    id: "lightning-cloud",
    elementIds: ["lightning", "cloud"],
    description: "Lightning occurs within clouds"
  },
  {
    id: "lightning-rain",
    elementIds: ["lightning", "rain"],
    description: "Lightning often accompanies rain"
  },
  {
    id: "fog-water",
    elementIds: ["fog", "water"],
    description: "Fog consists of water droplets"
  },
  {
    id: "fog-cloud",
    elementIds: ["fog", "cloud"],
    description: "Fog is essentially a low-lying cloud"
  },
  // Cross-category connections
  {
    id: "sheep-grass",
    elementIds: ["sheep", "grass"],
    description: "Sheep eat grass"
  },
  {
    id: "wolf-deer",
    elementIds: ["wolf", "deer"],
    description: "Wolves hunt deer"
  },
  {
    id: "frog-rain",
    elementIds: ["frog", "rain"],
    description: "Frogs are more active after rain"
  },
  {
    id: "deer-tree",
    elementIds: ["deer", "tree"],
    description: "Deer seek shade under trees"
  },
  {
    id: "bird-berry",
    elementIds: ["bird", "berry"],
    description: "Birds eat berries"
  },
  {
    id: "bear-berry",
    elementIds: ["bear", "berry"],
    description: "Bears eat berries"
  },
  {
    id: "butterfly-sun",
    elementIds: ["butterfly", "sun"],
    description: "Butterflies are active on sunny days"
  },
  {
    id: "fish-ice",
    elementIds: ["fish", "ice"],
    description: "Fish live under ice in frozen lakes"
  },
  {
    id: "animal-water",
    elementIds: ["wolf", "water"],
    description: "All animals need water to survive"
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
