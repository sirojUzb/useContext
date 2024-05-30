import { useContext } from "react";
import Card from "./Card";
import MovieContext from "../context/movieContext";

const Body = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="flex flex-col w-full items-center justify-center my-[49px] gap-[30px]">
      {movies.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
};

export default Body;
// 2-video 32-minutdan kor
