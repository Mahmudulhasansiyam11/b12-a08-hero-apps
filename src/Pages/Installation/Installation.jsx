import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredApp } from "../../Utility/AddToDB";
import InstallationCard from "../InstallationCard/InstallationCard";

const Installation = () => {
    const [readList, SetReadList] = useState([]);
    const appData = useLoaderData();
    console.log(appData);

    useEffect(()=>{
        const storedAppData = getStoredApp();
        const convertedStoredApp = storedAppData.map(id => parseInt(id));
        const myReadList = appData.filter(app => convertedStoredApp.includes(app.id));
        SetReadList(myReadList);
    }, [])
 
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
            <h3 className="inter-font font-semibold text-[24px]">{readList.length} Apps Found</h3>
          </div>
          <div>
            <h3>a</h3>
          </div>

        </div>
      </div>

      <div className="pt-[16px] max-w-[1140px] mx-auto pb-[20px] md:pb-[40px] lg:pb-[60px]">
        {
            readList.map(appData => <InstallationCard key={appData.id} appData={appData}></InstallationCard>)
        }
      </div>

    </div>
  );
};

export default Installation;
