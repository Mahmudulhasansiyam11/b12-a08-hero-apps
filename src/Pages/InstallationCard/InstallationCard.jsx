import React from 'react';
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const InstallationCard = ({appData}) => {

    const {
    image,
    title,
    downloads,
    ratingAvg,
    size,
  } = appData;

    return (
        <div className='mt-3 bg-white rounded-[4px] p-2'>
            <div className='flex justify-between items-center'>
            <div className="flex justify-center items-center gap-4">
                <div>
                    <img className='w-[80px]' src={image} alt="" />
                </div>
                <div>
                    <h3 className='inter-font font-medium text-[20px]'>{title}</h3>

                    <div className='mt-[16px] flex justify-center items-center gap-4'>

                        <div className='flex items-center gap-1'>
                            <img className='w-[12px]' src={downloadIcon} alt="" />
                            <p className='inter-font font-medium text-[#00D390]'><span>{downloads}</span>B</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='w-[12px]' src={ratingIcon} alt="" />
                            <p className='inter-font font-medium text-[#FF8811]'>{ratingAvg}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <p className='inter-font font-medium text-[#627382]'>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Uninstall Button */}
            <div>
                <div>
                    <button className='text-white bg-[#00D390] rounded-[4px] px-[16px] py-[12px]'>Uninstall</button>
                </div>
            </div>

        </div>
        </div>
    );
};

export default InstallationCard;