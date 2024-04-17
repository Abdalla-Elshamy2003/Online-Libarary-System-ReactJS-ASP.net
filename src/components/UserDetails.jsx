import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import Knob from "../AllCharts/knob/knob";

const UserDetails = () => {
  const [knobsData, setKnobsData] = useState([
    { title: "Books", value: 200, color: "#506E5C" },
    { title: "Readers", value: 1500, color: "#506E5C" },
    { title: "Interested", value: 3000, color: "#506E5C" },
    { title: "Buyers", value: 1200, color: "#506E5C" },
  ]);

  const handleChange = (index, newValue) => {
    const newKnobsData = [...knobsData];
    newKnobsData[index].value = newValue;
    setKnobsData(newKnobsData);
  };

  return (
    <>
      <div className="bg-[#E5EDE8]">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between py-8">
            {knobsData.map((knob, index) => (
              <div key={index}>
                <Knob
                  value={knob.value}
                  height={200}
                  width={150}
                  fgColor={knob.color}
                  displayCustom={() => {
                    return false;
                  }}
                  onChange={(newValue) => handleChange(index, newValue)}
                />
                <h4
                  className={`text-center text-[22px] font-medium text-[${
                    knob && knob.color
                  }]`}
                >
                  {knob.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
