import { createContext, useState } from "react";
import { movies as mock_movies } from "../utils";

export const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(mock_movies);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
