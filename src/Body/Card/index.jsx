import Footer from "./Footer";

const Card = ({
  title,
  year,
  genre,
  rating,
  img,
  description,
  onDelete,
  id,
}) => {
  return (
    <div className="w-[300px] h-full border flex flex-col gap-[10px]">
      <img src={img} alt="alt" className="w-full h-[300px] object-cover" />
      <div className="flex justify-between items-center pl-[10px] pr-[10px]">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <div className="flex justify-between items-center pl-[10px] pr-[10px]">
        <h3>{genre}</h3>
        <h3>{rating}</h3>
      </div>
      <p className="pl-[10px] pr-[10px]">{description}</p>
      <Footer onDelete={onDelete} />
    </div>
  );
};

export default Card;
