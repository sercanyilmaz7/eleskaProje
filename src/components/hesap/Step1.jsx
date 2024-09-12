import React from "react";

const Step1 = () => {
  return (
    <div className="flex flex-col justify-center h-[350px] gap-5">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-5">
            <img src="assest/account-pics/pizza.png" alt="pizza" />
          </div>
          <div className="flex items-center">
            <span className="pr-1">Tomato Salad </span>|{" "}
            <span className="pl-1 pr-1">Pizza Kebap </span>|
            <span className="pl-1"> Smirnoff 0.275 L</span>
          </div>
        </div>
        <div className="pr-10">
          <p>20-06-2023 10.15</p>
          <p>🛵 Yolda</p>
          <p>Detay ➡️</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-5">
            <img src="assest/account-pics/salata.png" alt="salad" />
          </div>
          <div className="flex items-center">
            <span className="pr-1">Salad</span>|
            <span className="pr-1 pl-1">Durum in flatbread with veal</span>|
            <span className="pl-1">Cola</span>
          </div>
        </div>
        <div className="pr-10">
          <p>20-06-2023 10.15</p>
          <p>🛵 Yolda</p>
          <p>Detay ➡️</p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
