import React, { useState } from "react";

import { RiShoppingBasket2Fill } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
const Checkout = ({ selectedItem }) => {
  const [isBoolen, setIsBoolen] = useState(true);
  const items = [
    {
      name: "pizza1",
      price: 17.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGwGmRTgt8p9FAHqY3s6ktpTG4i0kahw88A&usqp=CAU",
      quantity: 1,
    },
    {
      name: "pizza2",
      price: 17.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGwGmRTgt8p9FAHqY3s6ktpTG4i0kahw88A&usqp=CAU",
      quantity: 1,
    },
    {
      name: "pizza3",
      price: 17.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGwGmRTgt8p9FAHqY3s6ktpTG4i0kahw88A&usqp=CAU",
      quantity: 1,
    },
  ];

  return (
    <>
      {isBoolen ? (
        <div
          className=" rounded-full  fixed left-5 bottom-5 cursor-pointer bg-red-600 "
          onClick={() => setIsBoolen(!isBoolen)}
        >
          {/* <img
            src="https://st1.myideasoft.com/idea/db/47/themes/selftpl_603a9895d5c99/assets/images/icon-cart.svg?revision=7.2.6.1-10-1687362623"
            alt="fixed"
            className="rounded-full w-[100px] h-[100px]"
          /> */}
          <GiShoppingCart className=" w-20 h-20  border-2 p-3 border-gray-600 border-solid rounded-full" />
        </div>
      ) : (
        <div className="relative " onClick={() => setIsBoolen(!isBoolen)}>
          <div className="    fixed left-5 bottom-5 ">
            <button className="py-2 px-20  rounded smx:w-44 text-white bg-[#E12A32] hover:bg-[#E0E0E0] hover:text-[#E12A32]  ">
              Siparişlerim
            </button>
            <div className="w-[70vw] container border border-red-600 border-3 flex justify-around items-center bg-gray-950">
              <div className="flex flex-col w-1/2">
                {items.map((item) => {
                  return (
                    <div className="flex justify-around">
                      <div className="text-left">
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                          <li>
                            <span>x{item.quantity}</span> {item.name}
                          </li>
                        </ul>
                      </div>
                      <div className=" ml-40  ">
                        <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 ">
                          <li>{item.quantity * item.price}$</li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-1/2 text-center">
                <button className="py-2 px-20  rounded smx:w-44 text-white bg-[black] hover:bg-[#E0E0E0] hover:text-[#E12A32]  ">
                  Sepete Git
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
