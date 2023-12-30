import GroupBar from "../charts/GroupBar";
import HorizontalBar from "../charts/HorizontalBar";
import CustomComposed from "../charts/CustomComposed";
import CustomTables from "../ui/CustomTables";
import LogoSection from "../ui/LogoSection";
import CustomContainer from "../reusable/CustomContainer";
import GauzeWithHeader from "../reusable/GauzeWithHeader";
import { tgmData } from "../data";
import { converter } from "../../utils/helper";

export default function TGM() {
  const data = converter(tgmData.Shift);
  // console.log(data);
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center p-2"
        style={{ backgroundImage: `url('/images/silver-bg.jpg')` }}
      >
        <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
          <div className="col-span-3 row-span-2">
            <LogoSection pageName={"TGM"}>
              <div className="flex justify-between px-2 text-sm mt-5">
                <p>OEE</p>
                <div className="flex w-full bg-black justify-end items-center ml-16">
                  <p className="digital-font text-right">{data.OEE}</p>
                  <span className="text-[9px] text-white">%</span>
                </div>
              </div>
              <div className="flex justify-between px-2 text-sm mt-2">
                <p className="pr-[6px]">OR</p>
                <div className="flex w-full bg-black justify-end items-center ml-16">
                  <p className="digital-font text-right">{data.OR}</p>
                </div>
              </div>
            </LogoSection>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-3 dotted-bg">
            <CustomContainer title="Production" subTitle={"(Nos)"}>
              <HorizontalBar
                data={Object.entries(data.Production.TGM).map((entry) => ({
                  name: entry[0],
                  value: entry[1],
                }))}
              />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-5 dotted-bg">
            <CustomContainer title="Power" subTitle={"(KWH)"}>
              <GroupBar />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-7 dotted-bg">
            <CustomContainer title="Air" subTitle={"(CFM)"}>
              <HorizontalBar
                data={Object.entries(data.Air).map((entry) => ({
                  name: entry[0],
                  value: entry[1],
                }))}
              />
            </CustomContainer>
          </div>
          <div className="col-span-4 row-span-2 col-start-4 row-start-1 bg-[#151419] text-white text-sm dotted-bg">
            <CustomTables data={data.StopTime} title="Stop-Time" />
          </div>
          <div className="col-span-4 row-span-2 col-start-8 row-start-1 bg-[#151419] text-white text-sm dotted-bg">
            <CustomTables data={data.Production} title="Production" />
          </div>
          <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419] dotted-bg">
            <CustomContainer title="Daily Production & OEE">
              <CustomComposed />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-4 row-start-7 bg-[#151419] dotted-bg">
            <GauzeWithHeader
              title={"Speed (Shift-A)"}
              subTitle={"Per/min"}
              value={data.Speed["Shift-A"]}
              redFrom={200}
              redTo={500}
              yellowFrom={100}
              yellowTo={200}
              greenFrom={0}
              greenTo={100}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-7 row-start-7 bg-[#151419] dotted-bg">
            <GauzeWithHeader
              title={"Speed (Shift-B)"}
              subTitle={"Per/min"}
              value={data.Speed["Shift-B"]}
              redFrom={200}
              redTo={500}
              yellowFrom={100}
              yellowTo={200}
              greenFrom={0}
              greenTo={100}
            />
          </div>
          <div className="col-span-3 row-span-2 col-start-9 row-start-7 bg-[#151419] dotted-bg">
            <GauzeWithHeader
              title={"Speed (Shift-C)"}
              subTitle={"Per/min"}
              value={data.Speed["Shift-C"]}
              redFrom={200}
              redTo={500}
              yellowFrom={100}
              yellowTo={200}
              greenFrom={0}
              greenTo={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
