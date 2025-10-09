import { useState } from "react";
import { useLoaderData } from "react-router";
import SearchError from "../../Errors/SearchError/SearchError";
import Card from "../Card/Card";

const App = () => {
  const [search, setSearch] = useState("");
  const appdata = useLoaderData();
  //   console.log(appdata);
  

  const term = search.trim().toLocaleLowerCase();
  const searchedAppData = term
    ? appdata.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : appdata;

  return (
    <div className="bg-gray-200">
      <div>
        <div className="flex justify-center items-center pt-[20px] md:pt-[40px] lg:pt-[60px]">
          <h3 className="inter-font font-bold text-[20px] md:text-[35px] lg:text-[48px]">
            Our All Applications
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <p className="inter-font font-light text-[#627382] text-[10px] md:text-[14px] lg:text-[16px]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[30px] lg:mt-[40px] max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="inter-font font-semibold text-[24px]">
              ({searchedAppData.length}) Apps Found
            </h3>
          </div>

          {/* Search */}
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>

        <div className="max-w-[1140px] mx-auto mt-[20px] md:mt-[30px] lg:mt-[40px] pb-[20px] md:pb-[30px] lg:pb-[40px]">
          {searchedAppData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">
              {searchedAppData.map((data) => (
                <Card key={data.id} data={data}>
                </Card>
              ))}
            </div>
          ) : (
            <div className="">
              <SearchError></SearchError>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;
