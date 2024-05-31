import { Button } from "antd";
import { useContext } from "react";
import { MovieContext } from "../../../context/movieContext";

const Footer = ({ id }) => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <div className="flex justify-between items-center pl-[10px] pr-[10px]">
        <Button>Edit</Button>
        <Button
          onClick={() => {
            setMovies(movies.filter((value) => value.id !== id));
          }}
          danger
          type="primary"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Footer;
