import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

const Navbar = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="bg-green-300 flex items-center justify-between pl-[30px] pr-[30px] h-[80px]">
      <h3 className="cursor-pointer">O{"'"}zbek kino</h3>
      <h3 className="cursor-pointer">Kino soni: {movies.length}</h3>
    </div>
  );
};

export default Navbar;
