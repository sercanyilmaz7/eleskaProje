import React, { useState } from "react";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineSettingsSuggest } from "react-icons/md";

const Account = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="basis-1/4 border-e-2 m-5">
      <h2 className=" my-3 font-bold text-2xl text-center"> Hesabım</h2>
      <ol className=" space-y-4 mt-10 w-40 m-auto ">
        <li>
          <div
            className={`w-full p-2 border-2 rounded-lg bg-green-50 dark:bg-gray-200 ${
              activeTab === 1 && "border border-black text-black"
            }
            ${
              activeTab > 1 &&
              "text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-200 dark:border-gray-400 dark:text-gray-400"
            }`}
            role="alert"
            onClick={() => handleTabClick(1)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <TbAlignBoxLeftMiddle className="text-xl" />
              </div>
              <h3 className=" font-semibold">Siparişlerim</h3>

              {activeTab === 1 && (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </li>
        <li>
          <div
            className={`w-full p-2  border-2 rounded-lg bg-green-50 dark:bg-gray-200 ${
              activeTab === 2 && "border border-black text-black"
            }
                  ${
                    activeTab > 2 &&
                    "text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-200 dark:border-gray-400 dark:text-gray-400"
                  }
                  ${
                    activeTab < 2 &&
                    "text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-200 dark:border-gray-400 dark:text-gray-400"
                  }`}
            role="alert"
            onClick={() => handleTabClick(2)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-between">
              <div className="">
                <AiOutlineInfoCircle className="text-2xl" />
              </div>
              <h3 className="font-bold">Bildirimler</h3>

              {activeTab === 2 && (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </li>
        <li>
          <div
            className={`w-full p-2  border-2 rounded-lg bg-green-50 dark:bg-gray-200 ${
              activeTab === 3 && "border border-black text-black"
            }
                ${
                  activeTab > 3 &&
                  "text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-200 dark:border-gray-400 dark:text-gray-400"
                }
                ${
                  activeTab < 3 &&
                  "text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-200 dark:border-gray-400 dark:text-gray-400"
                }`}
            role="alert"
            onClick={() => handleTabClick(3)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-between">
              <span className="">
                <BiUserCircle className="text-2xl" />
              </span>
              <h3 className="font-bold">Hesabım</h3>

              {activeTab === 3 && (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </li>
        <li>
          <div
            className={`w-full p-2  border-2 rounded-lg bg-green-50 dark:bg-gray-200 ${
              activeTab === 4 && "border border-black text-black"
            }
                  
            ${
              activeTab < 4 &&
              "text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-200 dark:border-gray-400 dark:text-gray-400"
            }`}
            role="alert"
            onClick={() => handleTabClick(4)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <MdOutlineSettingsSuggest className="text-2xl" />
              </div>
              <h3 className="font-bold">Ayarlar</h3>

              {activeTab === 4 && (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Account;
