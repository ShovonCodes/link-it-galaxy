
// Movie and actor data types
export interface Movie {
  id: string;
  title: string;
  year: number;
  imageUrl: string;
  cast: string[];
}

export interface Actor {
  id: string;
  name: string;
  imageUrl: string;
}

// Sample actors
export const actors: Actor[] = [
  {
    id: "keanu",
    name: "Keanu Reeves",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjUxNDcwMTg4Ml5BMl5BanBnXkFtZTcwMjU4NDYyOA@@._V1_.jpg"
  },
  {
    id: "lawrence",
    name: "Jennifer Lawrence",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ0MDI@._V1_.jpg"
  },
  {
    id: "leo",
    name: "Leonardo DiCaprio",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_.jpg"
  },
  {
    id: "emma",
    name: "Emma Stone",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg"
  },
  {
    id: "denzel",
    name: "Denzel Washington",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_.jpg"
  },
  {
    id: "meryl",
    name: "Meryl Streep",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg"
  },
  {
    id: "tom",
    name: "Tom Hanks",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg"
  },
  {
    id: "viola",
    name: "Viola Davis",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzUxNjM4ODI1OV5BMl5BanBnXkFtZTgwNTEwNDE2OTE@._V1_.jpg"
  },
  {
    id: "bradley",
    name: "Bradley Cooper",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjM0OTIyMzY1M15BMl5BanBnXkFtZTgwMTg0OTE0NzE@._V1_.jpg"
  },
  {
    id: "sandra",
    name: "Sandra Bullock",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_.jpg"
  }
];

// Sample movies with cast connections
export const movies: Movie[] = [
  {
    id: "matrix",
    title: "The Matrix",
    year: 1999,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    cast: ["keanu", "lawrence"]
  },
  {
    id: "silver",
    title: "Silver Linings Playbook",
    year: 2012,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_.jpg",
    cast: ["lawrence", "bradley"]
  },
  {
    id: "titanic",
    title: "Titanic",
    year: 1997,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    cast: ["leo"]
  },
  {
    id: "lalaland",
    title: "La La Land",
    year: 2016,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    cast: ["emma"]
  },
  {
    id: "gravity",
    title: "Gravity",
    year: 2013,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg",
    cast: ["sandra", "bradley"]
  },
  {
    id: "revenant",
    title: "The Revenant",
    year: 2015,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    cast: ["leo", "tom"]
  },
  {
    id: "fences",
    title: "Fences",
    year: 2016,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTg0Nzg1NDE4MF5BMl5BanBnXkFtZTgwNTUyNDkxMTI@._V1_.jpg",
    cast: ["viola", "denzel"]
  },
  {
    id: "doubt",
    title: "Doubt",
    year: 2008,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTI0MDkzNjA1NF5BMl5BanBnXkFtZTcwMTk0NDYyMg@@._V1_.jpg",
    cast: ["meryl", "viola"]
  },
  {
    id: "spotlight",
    title: "Spotlight",
    year: 2015,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_.jpg",
    cast: ["emma", "sandra"]
  },
  {
    id: "devil",
    title: "The Devil Wears Prada",
    year: 2006,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_.jpg",
    cast: ["meryl", "emma"]
  },
  {
    id: "forrest",
    title: "Forrest Gump",
    year: 1994,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    cast: ["tom", "sandra"]
  },
  {
    id: "equalizer",
    title: "The Equalizer",
    year: 2014,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_.jpg",
    cast: ["denzel"]
  },
  {
    id: "ironlady",
    title: "The Iron Lady",
    year: 2011,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_.jpg",
    cast: ["meryl"]
  },
  {
    id: "hangover",
    title: "The Hangover",
    year: 2009,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    cast: ["bradley"]
  },
  {
    id: "american",
    title: "American Sniper",
    year: 2014,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg",
    cast: ["bradley", "keanu"]
  }
];

// Helper function to get actor by ID
export const getActorById = (id: string): Actor | undefined => {
  return actors.find(actor => actor.id === id);
};

// Helper function to get movies by actor ID
export const getMoviesByActor = (actorId: string): Movie[] => {
  return movies.filter(movie => movie.cast.includes(actorId));
};

// Helper function to get connected actors
export const getConnectedActors = (actorId: string): Actor[] => {
  const connectedActorIds = new Set<string>();
  
  // Find all movies this actor is in
  const actorMovies = getMoviesByActor(actorId);
  
  // For each movie, get all other actors
  actorMovies.forEach(movie => {
    movie.cast.forEach(castMemberId => {
      if (castMemberId !== actorId) {
        connectedActorIds.add(castMemberId);
      }
    });
  });
  
  // Return actor objects for all connected actors
  return actors.filter(actor => connectedActorIds.has(actor.id));
};

// Function to check if two actors are directly connected (appeared in same movie)
export const areActorsDirectlyConnected = (actorId1: string, actorId2: string): boolean => {
  return movies.some(movie => 
    movie.cast.includes(actorId1) && movie.cast.includes(actorId2)
  );
};

// Find a movie that connects two actors
export const findConnectingMovie = (actorId1: string, actorId2: string): Movie | undefined => {
  return movies.find(movie => 
    movie.cast.includes(actorId1) && movie.cast.includes(actorId2)
  );
};

// Generate a random pair of actors that can be connected within 3 steps
export const getRandomActorChallenge = (): { start: Actor, target: Actor } => {
  const startIndex = Math.floor(Math.random() * actors.length);
  let targetIndex;
  
  do {
    targetIndex = Math.floor(Math.random() * actors.length);
  } while (targetIndex === startIndex);
  
  return {
    start: actors[startIndex],
    target: actors[targetIndex]
  };
};
