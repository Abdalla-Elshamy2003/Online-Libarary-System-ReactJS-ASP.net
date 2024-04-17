import React from "react";
import AreaChart from "../AllCharts/apex/areachart";
import DonutChart from "../AllCharts/apex/dountchart";
import StackedBarChart from "../AllCharts/apex/stackedbarchart";

const Charts = () => {
  return (
    <>
      <div className="bg-[#E5EDE8]">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between py-5">
            <div className="w-full">
              <AreaChart />
            </div>
            <div className="w-[50%]">
              <DonutChart />
            </div>
          </div>
          <div>
            <StackedBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
