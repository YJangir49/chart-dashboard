import GroupBar from "../charts/GroupBar";
import HorizontalBar from "../charts/HorizontalBar";
import CustomComposed from "../charts/CustomComposed";
import CustomTables from "../ui/CustomTables";
import LogoSection from "../ui/LogoSection";
import CustomContainer from "../reusable/CustomContainer";
import GauzeWithHeader from "../reusable/GauzeWithHeader";

const batchData = [
  { id: "1", item1: "Mixer-1", item2: "0", item3: "0", item4: "120000" },
  { id: "2", item1: "Mixer-2", item2: "522", item3: "6.31", item4: "139000" },
  { id: "3", item1: "Mixer-3", item2: "526", item3: "6.38", item4: "132000" },
  { id: "4", item1: "Mixer-4", item2: "421", item3: "6.69", item4: "136000" },
  { id: "5", item1: "Mixer-5", item2: "4945", item3: "0", item4: "0" },
];

const shiftData = [
  {
    id: "1",
    item1: "Power (KWH)",
    item2: "849",
    item3: "871.44",
    item4: "858.50",
  },
  {
    id: "2",
    item1: "Steam (Kg/hour)",
    item2: "0",
    item3: "0",
    item4: "0",
  },
  {
    id: "3",
    item1: "Air (CFM)",
    item2: "3996.47",
    item3: "3860.59",
    item4: "3986.89",
  },
  {
    id: "4",
    item1: "Water (Mt/hour)",
    item2: "0",
    item3: "0",
    item4: "0",
  },
];
// bg-[#666668]

export default function TGM() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-neutral-300 to-neutral-500">
        <div className="grid grid-cols-11 grid-rows-8 gap-4 h-screen">
          <div className="col-span-3 row-span-2">
            <LogoSection />
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-3 bg-[#151419]">
            <CustomContainer title="Production" subTitle={"(Nos)"}>
              <HorizontalBar />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-5 bg-[#151419]">
            <CustomContainer title="Power" subTitle={"(KWH)"}>
              <GroupBar />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-1 row-start-7 bg-[#151419]">
            <CustomContainer title="Air" subTitle={"(CFM)"}>
              <HorizontalBar />
            </CustomContainer>
          </div>
          <div className="col-span-4 row-span-2 col-start-4 row-start-1 bg-[#151419] text-white text-sm">
            <CustomTables
              tableData={batchData}
              tableTitle="Batch Quality"
              subHeading="(recent)"
            />
          </div>
          <div className="col-span-4 row-span-2 col-start-8 row-start-1 bg-[#151419] text-white text-sm">
            <CustomTables tableData={shiftData} tableTitle="Shift Parameters" />
          </div>
          <div className="col-span-8 row-span-4 col-start-4 row-start-3 bg-[#151419]">
            <CustomContainer title="Daily Production & OEE">
              <CustomComposed />
            </CustomContainer>
          </div>
          <div className="col-span-3 row-span-2 col-start-4 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Power"}
              subTitle={"KWH"}
              value={370}
              redFrom={200}
              redTo={500}
              yellowFrom={100}
              yellowTo={200}
              greenFrom={0}
              greenTo={100}
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-7 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Power"}
              subTitle={"KWH"}
              value={370}
              redFrom={200}
              redTo={500}
              yellowFrom={100}
              yellowTo={200}
              greenFrom={0}
              greenTo={100}
            />
          </div>
          <div className="col-span-3 row-span-2 col-start-9 row-start-7 bg-[#151419]">
            <GauzeWithHeader
              title={"Power"}
              subTitle={"KWH"}
              value={370}
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
