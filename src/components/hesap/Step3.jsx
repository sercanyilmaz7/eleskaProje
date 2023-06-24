import React from "react";

const Step3 = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex gap-8 p-8">
        <div>
          <img
            className=" rounded-full w-24 h-24"
            src="assest/account-pics/profilsm.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xl mb-3">İsim Soyisim</p>
          <p className=" text-sm text-gray-400">İstanbul, Turkey</p>
        </div>
      </div>
      <div className="font-bold px-8">
        <div className="flex gap-3 ">
          <div className="w-full mb-4">
            <label className="mb-2" htmlFor="firstName">
              Ad
            </label>
            <input
              className="border-2 rounded-md p-2"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="w-full mb-4">
            <label className="mb-2" htmlFor="lastname">
              Soyad
            </label>
            <input
              className="border-2 rounded-md p-2"
              type="text"
              name="lastname"
              id="lastname"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 rounded-md p-2 "
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="w-full mb-4">
          <label className="mb-2" htmlFor="phone">
            Telefon
          </label>
          <input
            className="border-2 rounded-md p-2"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div className="w-full mb-4">
          <label className="mb-2" htmlFor="street">
            Sokak
          </label>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div className="w-full mb-4">
          <div className="flex gap-3 ">
            <div className="w-full">
              <label className="mb-2" htmlFor="city">
                Şehir
              </label>
              <input
                className="border-2 rounded-md p-2"
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="w-full">
              <label className="mb-2" htmlFor="zip">
                Zip
              </label>
              <input
                className="border-2 rounded-md p-2"
                type="tel"
                name="zip"
                id="zip"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8">
        <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default Step3;
