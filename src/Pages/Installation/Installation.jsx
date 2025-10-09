import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import "react-tabs/style/react-tabs.css";
import { getStoredApp } from "../../Utility/AddToDB";
import InstallationCard from "../InstallationCard/InstallationCard";

const Installation = () => {
  const [readList, SetReadList] = useState([]);
  const [sort, setSort] = useState("");
  const appData = useLoaderData();
  console.log(appData);

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedStoredApp = storedAppData.map((id) => parseInt(id));
    const myReadList = appData.filter((app) =>
      convertedStoredApp.includes(app.id)
    );
    SetReadList(myReadList);
  }, []);


  const handleSort = (type) => {
    setSort(type);
    if(type === "Low-High"){
        const sortedByLowToHigh = [...readList].sort((a,b) => a.downloads - b.downloads);
        SetReadList(sortedByLowToHigh);
    }
    if(type === "High-Low"){
        const sortedByHighToLow = [...readList].sort((a,b) => b.downloads - a.downloads);
        SetReadList(sortedByHighToLow);
    }
  }

  
  return (
    <div className="bg-gray-200">
      <div>
        <div className="flex justify-center items-center pt-[20px] md:pt-[40px] lg:pt-[60px]">
          <h3 className="inter-font font-bold text-[20px] md:text-[35px] lg:text-[48px]">
            Your Installed Apps
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <p className="inter-font font-light text-[#627382] text-[10px] md:text-[14px] lg:text-[16px]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto pt-[20px] md:pt-[30px] lg:pt-[40px]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="inter-font font-semibold text-[24px]">
              {readList.length} Apps Found
            </h3>
          </div>

          {/* Sort */}
          <div>
            <details className="dropdown">
              <summary className="btn m-1">Sort By Size: {sort ? sort : ""}</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <a onClick={()=> handleSort("Low-High")}>Low-High</a>
                </li>
                <li>
                  <a onClick={()=> handleSort("High-Low")}>High-Low</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      <div className="pt-[16px] max-w-[1140px] mx-auto pb-[20px] md:pb-[40px] lg:pb-[60px]">
        {readList.map((appData) => (
          <InstallationCard
            key={appData.id}
            appData={appData}
          ></InstallationCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
