import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const renderStep = (activeTab) => {
  switch (activeTab) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    default:
      return null;
  }
};

const MultiAcc = ({ activeTab }) => {
  return (
    <div className="basis-3/4 ">
      <main>{renderStep(activeTab)}</main>
    </div>
  );
};
export default MultiAcc;
