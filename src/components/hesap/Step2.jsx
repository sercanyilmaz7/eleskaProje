import React from "react";

const Step2 = () => {
  return (
    <div className="flex flex-col justify-center h-[350px] gap-5">
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-5">
            <img src="assest/account-pics/pizza.png" alt="pizza" />
          </div>
          <div className="flex items-center">
            <p>
              19389 numaralı siparişiniz teslim edilmek üzere yola çıkmıştır.
            </p>
          </div>
        </div>
        <div className="pr-10 flex items-center ">
          <button className="border-2 border-black py-1 px-3">DETAY</button>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-5">
            <img src="assest/account-pics/salata.png" alt="salad" />
          </div>
          <div className="flex items-center">
            <p>13246 numaralı siparişiniz teslim edilmiştir.</p>
          </div>
        </div>
        <div className="pr-10 flex items-center ">
          <button className="border-2 border-black py-1 px-3">DETAY</button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
