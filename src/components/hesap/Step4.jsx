import React from "react";

const Step4 = () => {
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-center">ŞİFRE</h1>
        <div className="w-full mb-4">
          <label className="mt-3" htmlFor="street">
            Mevcut Şifre
          </label>
          <input
            className="border-2 rounded-md p-2 mt-1"
            type="text"
            name="street"
            id="street"
          />
          <label className="mt-3" htmlFor="street">
            Yeni Şifre
          </label>
          <input
            className="border-2 rounded-md p-2 mt-1"
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div className="">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kaydet
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-center">E-MAİL</h1>
        <div className="w-full mb-4">
          <label className="mt-3" htmlFor="street">
            Mevcut E-mail
          </label>
          <input
            className="border-2 rounded-md p-2 mt-1"
            type="text"
            name="street"
            id="street"
          />
          <label className="mt-3" htmlFor="street">
            Yeni E-mail
          </label>
          <input
            className="border-2 rounded-md p-2 mt-1"
            type="text"
            name="street"
            id="street"
          />
        </div>
        <div>
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kaydet
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center">KARTLARIM</h1>
        <h3 className="mt-2">Henüz kayıtlı bir ödeme seçeneğiniz yok.</h3>
        <div className="mt-2">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kart Ekle
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center mb-3">TERCİHLER</h1>
        <div className=" flex mb-2">
          <input className="w-4 mr-2" type="checkbox" name="sart1" id="sart1" />
          <label htmlFor="sart1">
            Eleska'nın sunduğu kampanyalar, indirimler ve haberler ile ilgili
            e-posta almak istiyorum.
          </label>
        </div>
        <div className="flex mb-2">
          <input className="w-4 mr-2" type="checkbox" name="sart2" id="sart2" />
          <label htmlFor="sart2">
            Eleska'nın sunduğu kampanyalar, indirimler ve haberler ile ilgili
            sms almak istiyorum.
          </label>
        </div>

        <div className="">
          <button className="py-1 px-4 rounded-md bg-red-600 text-white mb-4">
            Kart Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
