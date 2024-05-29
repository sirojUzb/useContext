import { Button } from "antd";

const Card = () => {
  return (
    <div className="w-[300px] h-full border flex flex-col gap-[10px]">
      <img
        src="https://th.bing.com/th/id/OIP.2HFtWfGAsoqZAnbTM3vGNAHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        alt="alt"
        className="w-full h-[300px] object-cover"
      />
      <div className="flex justify-between items-center pl-[10px] pr-[10px]">
        <h3>Avatar</h3>
        <h3>2009</h3>
      </div>
      <div className="flex justify-between items-center pl-[10px] pr-[10px]">
        <h3>Drama</h3>
        <h3>9.3</h3>
      </div>
      <p className="pl-[10px] pr-[10px]">
        On the lush alien world of Pandora live the Na{"'"}vi, beings who appear
        primitive but are highly evolved. Because the planet{"'"}s environment
        is poisonous, human/Na{"'"}vi hybrids, called Avatars, must link to
        human minds to allow for free movement on Pandora.
      </p>
      <div className="flex justify-between items-center pl-[10px] pr-[10px]">
        <Button>Edit</Button>
        <Button danger type="primary">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card;
