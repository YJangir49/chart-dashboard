import { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "../reusable/CustomCard";
import Sidebar from "../reusable/Sidebar";
import Loader from "../reusable/Loader";
import { OVER_VIEW_ROUTES } from "../../constants/routes";
import { APP_URL } from "../../constants/url";

export default function Overview() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchOverViewData = async () => {
    try {
      const response = await axios.get(`${APP_URL}/tp/overview`);
      if (response) {
        setData(response.data);
      } else {
        throw new Error("No data received");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOverViewData();
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center p-2"
      style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
    >
      {loading ? (
        <div className="h-screen">
          <Loader dotStyle={{ backgroundColor: "black" }} />
        </div>
      ) : (
        <>
          <Sidebar />
          <h1 className="px-4 pt-8 pl-8 text-3xl font-bold">Overview</h1>
          <div className="my-8 flex flex-wrap">
            {Object.entries(data).map((item) => (
              <div className="w-1/4 px-4 py-6" key={item[0]}>
                <CustomCard
                  name={item[0]}
                  value={item[1]}
                  route={OVER_VIEW_ROUTES[item[0]]}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
