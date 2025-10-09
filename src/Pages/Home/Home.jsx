import { Link, useLoaderData } from "react-router";
import appStore from "../../assets/appStore.png";
import googlePlay from "../../assets/googlePlay.png";
import heroImage from "../../assets/hero.png";
import Card from "../Card/Card";
import { Suspense } from "react";
import SearchError from "../../Errors/SearchError/SearchError";

const Home = () => {

    const appData = useLoaderData();
    // console.log(data);
    const sliceAppData = appData.slice(0, 8);

  const handleGooglePlay = () => {
    window.open("https://play.google.com/store/games?device=windows", "_blank");
  };

  const handleAppStore = () => {
    window.open("https://www.apple.com/app-store/", "_blank");
  };

  return (
    <div className="pt-[20px] md:pt-[50px] lg:pt-[60px] bg-gray-200">
      <div>
        <div className="flex justify-center items-center">
          <h3 className="inter-font text-center font-bold text-[40px] md:text-[60px] lg:text-[72px] w-[350px] md:w-[500px] lg:w-[600px]">
            We Build{" "}
            <span className="mx-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-[10px] md:mt-[12px] lg:mt-[16px] w-[750px] text-center text-[#627382]">
            <p>
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
        </div>

        {/* Google Play and App Store button */}
        <div className="mt-[20px] md:mt-[30px] lg:mt-[40px]">
          <div className="flex justify-center items-center gap-[16px]">
            <div>
              <button
                onClick={handleGooglePlay}
                className="flex items-center gap-[10px] border border-[#D2D2D2] px-[21px] rounded-[4px] "
              >
                <img src={googlePlay} alt="google play image" />
                <p className="py-[16px] inter-font font-semibold">
                  Google Play
                </p>
              </button>
            </div>
            <div>
              <button
                onClick={handleAppStore}
                className="flex items-center gap-[10px] border border-[#D2D2D2] px-[21px] rounded-[4px]"
              >
                <img src={appStore} alt="app store image" />
                <p className="py-[16px] inter-font font-semibold">App Store</p>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <div className="mt-[20px] md:mt-[30px] lg:mt-[40px]">
            <img src={heroImage} alt="" />
          </div>
        </div>

        {/* trusted design */}
        <div>
            <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
                <div className="pt-[20px] md:pt-[40px] lg:pt-[60px] flex justify-center items-center">
                    <h3 className="inter-font font-bold md:text-[30px] lg:text-[48px]">Trusted by Millions, Built for You</h3>
                </div>


                <div className="pb-[20px] md:pb-[40px] lg:pb-[60px] flex justify-center items-center gap-10 md:gap-15 lg:gap-20 mt-[20px] md:mt-[35px] lg:[40px]">

                    <div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-light text-[7px] md:text-[12px] lg:text[16px]">Total Downloads</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-extrabold text-[30px] md:text-[56px] lg:text-[64px]">29.6M</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-light text-[7px] md:text-[12px] lg:text[16px]">21% more than last month</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-light text-[7px] md:text-[12px] lg:text[16px]">Total Reviews</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-extrabold text-[30px] md:text-[56px] lg:text-[64px]">906K</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-light text-[7px] md:text-[12px] lg:text[16px]">46% more than last month</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-light text-[7px] md:text-[12px] lg:text[16px]">Active Apps</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-extrabold text-[30px] md:text-[56px] lg:text-[64px]">132+</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="inter-font font-light text-[7px] md:text-[12px] lg:text[16px]">31 more will Launch</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-[20px] md:mt-[40px] lg:mt-[60px]">
            <div className="flex justify-center items-center">
                <h3 className="inter-font font-bold text-[20px] md:text-[30px] lg:text-[48px]">Trending Apps</h3>
            </div>
            <div className="flex justify-center items-center mt-2">
                <p className="inter-font font-light text-[12px] md:text-[14px lg:text-[16px]">Explore All Trending Apps on the Market developed by us</p>
            </div>
        </div>


        {/* feting data and card design */}
        <div className="max-w-[1140px] mx-auto mt-[20px] md:mt-[30px] lg:mt-[40px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">

            {
                sliceAppData.map(data => <Card key={data.id} data={data}></Card>)
            }

        </div>

        <div className="flex justify-center items-center mt-[20px] md:mt-[30px] lg:mt-[40px] pb-[20px] md:pb-[30px] lg:pb-[40px]">
            <Link to='/app' className="btn text-white inter-font font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Show All</Link>
        </div>



      </div>
    </div>
  );
};

export default Home;
