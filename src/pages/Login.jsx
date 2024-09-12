import React from "react";
import imageLogin from "../helper/imageLogin.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center mb-20">
      <div className="m-8 w-80 sm:w-64">
        <img src={imageLogin} />
      </div>

      <div className="w-[32rem] sm:w-64 m-2 flex flex-col justify-center ">
        <form className="w-full">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E-mail adresinizi giriniz"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Şifre *
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900  text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Şifrenizi giriniz"
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Beni Hatırla
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" text-white bg-red-primary hover:opacity-90 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-none text-l w-40 sm:w-auto px-5 py-3  
            text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Link to="/home"> Login</Link>
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center mt-4 text-danger-500">
          <a href="#">Şifremi Unuttum</a>

          <a href="/register">Yeni Hesap Oluştur</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
