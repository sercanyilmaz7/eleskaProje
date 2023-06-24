import React, { useState } from "react";
import Account from "./Account";
import MultiAcc from "./MultiAcc";

const MainAcc = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex">
      <Account activeTab={activeTab} setActiveTab={setActiveTab} />
      <MultiAcc activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainAcc;
