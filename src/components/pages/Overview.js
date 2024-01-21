import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../reusable/Loader";
import { OVER_VIEW_ROUTES } from "../../constants/routes";
import { APP_URL } from "../../constants/url";
import Sidebar from "../reusable/Sidebar";
import OverviewGrid from "../reusable/OverviewGrid";
import { UTILITY_DATA_TIME } from "../../constants/config";

export default function Overview() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchOverViewData = async (intervalId) => {
    try {
      const response = await axios.get(`${APP_URL}/tp/overview`);
      if (response) {
        setData(response.data);
      } else {
        if (intervalId) clearInterval(intervalId);
        throw new Error("No data received");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOverViewData();

    const intervalId = setInterval(() => {
      fetchOverViewData(intervalId);
    }, UTILITY_DATA_TIME);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen">
          <Loader dotStyle={{ backgroundColor: "black" }} />
        </div>
      ) : (
        <>
          <Sidebar>
            <h1 className="px-4 pt-8 pb-4 text-lg font-bold">Overview</h1>

            <div className="grid grid-cols-12 grid-rows-1 gap-4 mx-4">
              <div className="col-span-3 row-span-3 text-lg font-bold">
                Name
              </div>
              <div className="row-span-3 col-start-4 text-lg font-bold">
                Shift
              </div>
              <div className="col-span-2 row-span-3 col-start-5 text-lg font-bold">
                Production
              </div>
              <div className="col-span-2 row-span-3 col-start-7 text-lg font-bold">
                Power
              </div>
              <div className="col-span-2 row-span-3 col-start-9 text-lg font-bold">
                Stop-Time
              </div>
              <div className="col-span-2 row-span-3 col-start-11 text-lg font-bold">
                Speed
              </div>
            </div>

            {Object.entries(data).map((item) => (
              <OverviewGrid
                name={item[0]}
                value={item[1]}
                route={OVER_VIEW_ROUTES[item[0]]}
                key={item[0]}
              />
            ))}
          </Sidebar>
        </>
      )}
    </div>
  );
}
