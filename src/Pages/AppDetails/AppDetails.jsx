import { useLoaderData, useParams } from "react-router";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import downloadImage from "../../assets/icon-downloads.png";
import ratingImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";

const AppDetails = () => {
  const id = useParams();
  // console.log(id);
  const convertedId = parseInt(id.id);
  const appData = useLoaderData();
  // console.log(appData);
  const app = appData.find((a) => a.id === convertedId);
  console.log(app);

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app;

  return (
    <div className="bg-gray-200">
      <div className=" max-w-[1140px] mx-auto pt-[20px] md:pt-[40px] lg:md:pt-[60px] ">
        <div className="flex justify-center items-center md:justify-between md:mx-5 lg:justify-between lg:mx-0">
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <div className="flex justify-center items-center">
              <img className="w-[350px]" src={image} alt="" />
            </div>

            <div className="flex-1 mx-2 md:mx-0 lg:mx-0">
              <div className="">
                <h3 className="inter-font font-bold text-[16px] md:text-[28px] lg:text-[32px]">
                  {title}
                </h3>
              </div>
              <div className="mt-[8px]">
                <p className="inter-font text-[20px]">
                  Developed by{" "}
                  <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    {" "}
                    {companyName}{" "}
                  </span>{" "}
                </p>
              </div>

              <div className="w-full mt-[10px] md:mt-[20px] lg:mt-[20px]">
                <hr />
              </div>

              <div className="mt-[15px] md:mt-[20px] lg:mt-[20px]">
                <div className=" flex justify-center items-center gap-10">
                  <div>
                    <img src={downloadImage} alt="" />
                    <p className="mt-3 inter-font font-light">Downloads</p>
                    <p className="inter-font font-extrabold text-[40px]">
                      {downloads}
                    </p>
                  </div>
                  <div>
                    <img src={ratingImage} alt="" />
                    <p className="mt-3 inter-font font-light">
                      Average Ratings
                    </p>
                    <p className="inter-font font-extrabold text-[40px]">
                      {ratingAvg}
                    </p>
                  </div>
                  <div>
                    <img src={reviewImage} alt="" />
                    <p className="mt-3 inter-font font-light">Total Reviews</p>
                    <p className="inter-font font-extrabold text-[40px]">
                      {reviews}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 ">
                <div>
                  <button className="inter-font font-semibold text-white text-[20px] bg-[#00D390] rounded-[4px] px-[20px] py-[14px]">
                    Install Now ({size} MB)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[20px] md:mt-[30px] lg:mt-[40px] mx-5">
          <hr className="w-full" />
        </div>

        {/* BarChart */}
        <div className="mt-[20px] md:mt-[30px] lg:mt-[40px] mx-5">
          <div>
            <h3 className="inter-font font-semibold text-[24px]">Ratings</h3>
          </div>

          {/* BarChart */}
          <div className="mx-5">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={ratings}
                // margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          


        </div>

        <div className="mt-[20px] md:mt-[30px] lg:mt-[40px] mx-5">
          <hr className="w-full" />
        </div>

        {/* Description */}
        <div className="mt-[20px] md:mt-[30px] lg:mt-[40px] mx-5">
          <div>
            <h3 className="inter-font font-semibold text-[24px]">Description</h3>
          </div>

          {/* Description */}
          <div className="mt-6 pb-[30px] md:pb-[50px] lg:pb-[60px] ">
            <p className="inter-font font-light text-[20px] text-[#627382]">{description}</p>
          </div>

          


        </div>

      </div>
    </div>
  );
};

export default AppDetails;
