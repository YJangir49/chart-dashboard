import CustomBar from "../charts/CustomBar";
import CustomLine from "../charts/CustomLine";
import CustomPie from "../charts/CustomPie";
import CustomContainer from "../reusable/CustomContainer";
import GauzeWithHeader from "../reusable/GauzeWithHeader";
import CustomTables from "./CustomTables";
import LogoSection from "./LogoSection";
import SwitchBoard from "./SwitchBoard";
import { tpUtilityConstant } from "../data";
import { reverseConverter } from "../../utils/helper";

export default function PageLayout() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-neutral-300 to-neutral-500">
        <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
          <div className="col-span-3 row-span-2">
            <LogoSection />
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-3 bg-[#151419]">
            <CustomContainer title="Sound" subTitle="dB">
              <CustomPie
                data={tpUtilityConstant.Sound}
                title="Sound"
                unit={"db"}
              />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-5 bg-[#151419]">
            <CustomContainer title="dB Meter-1" subTitle="last 8 hours">
              <CustomLine />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-7 bg-[#151419]">
            <CustomContainer title="Bag-Filter">
              <SwitchBoard data={tpUtilityConstant.Bag} />
            </CustomContainer>
          </div>
          <div className="col-span-4 row-span-2 col-start-4 row-start-1 bg-[#151419] text-white text-sm">
            <CustomTables
              data={tpUtilityConstant.Mixer}
              title="Batch Quality"
              subTitle="(recent)"
            />
          </div>
          <div className="col-span-4 row-span-2 col-start-8 row-start-1 bg-[#151419] text-white text-sm">
            <CustomTables
              data={reverseConverter(tpUtilityConstant.Shift)}
              title="Shift Parameters"
            />
          </div>
          <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419]">
            <CustomContainer title="Power Consumption" subTitle="(KWH/ton)">
              <CustomBar />
            </CustomContainer>
          </div>
          <div className="col-span-2 row-span-2 col-start-4 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Power"}
              subTitle={"KWH"}
              value={tpUtilityConstant.Shift["Shift-A"].Power}
              maxValue={5000}
              redFrom={2000}
              redTo={5000}
              yellowFrom={1000}
              yellowTo={2000}
              greenFrom={0}
              greenTo={1000}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-6 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Steam"}
              subTitle={"Kg/hour"}
              value={tpUtilityConstant.Shift["Shift-A"].Steam}
              maxValue={1000}
              redFrom={600}
              redTo={1000}
              yellowFrom={300}
              yellowTo={600}
              greenFrom={0}
              greenTo={300}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-8 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Air"}
              subTitle={"CFM"}
              value={tpUtilityConstant.Shift["Shift-A"].Air}
              maxValue={5000}
              redFrom={2000}
              redTo={5000}
              yellowFrom={1000}
              yellowTo={2000}
              greenFrom={0}
              greenTo={1000}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-10 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Water"}
              subTitle={"Mt3/Hour"}
              value={tpUtilityConstant.Shift["Shift-A"].Water}
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
