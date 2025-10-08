import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const Card = ({ data }) => {

    const {image, title, downloads, ratingAvg} = data;

  return (
   <div className="w-[270px] bg-white p-[16px] rounded-[8px] shadow hover:scale-105 transition ease-in-out">
    <div>
        <div className="flex justify-center items-center">
            <img className="w-[150px]" src={image} alt="" />
        </div>
        <div className="mt-[16px]">
            <p className="inter-font font-medium text-[20px]">{title}</p>
        </div>

        <div className="flex justify-between items-center mt-[16px]">
            <div className="w-[70px] bg-[#F1F5E8] p-[6px] flex justify-center items-center gap-[8px] rounded-[4px]">
                <img className="w-[15px]" src={downloadIcon} alt="" />
                <p>{downloads}</p>
            </div>

             <div className="w-[70px] bg-[#FFF0E1] p-[6px] flex justify-center items-center gap-[8px] rounded-[4px]">
                <img className="w-[15px]" src={ratingIcon} alt="" />
                <p>{ratingAvg}</p>
            </div>
        </div>
    </div>

   </div>
  );
};

export default Card;
