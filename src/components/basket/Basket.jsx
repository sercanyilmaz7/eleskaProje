import React, { useEffect, useState } from "react";

const Basket = () => {
  const [selectedItem, setSelectedItem] = useState([
    { name: "", price: "", img: "", quantity: 1 },
  ]);
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
  console.log(typeof selectedItem);

  const [price, setPrice] = useState(0);
  const totalPrice = selectedItem.price * selectedItem.quantity;
  const handleIncrement = (itemName) => {
    const upDateItems = selectedItem.map((item) => {
      if (item.name === itemName) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setSelectedItem(upDateItems);
  };
  const handleDecrement = (itemName) => {
    const upDateItems = selectedItem.map((item) => {
      if (item.name === itemName) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setSelectedItem(upDateItems);
  };
  const calculateSum = () => {
    const a = selectedItem.map((tot) => tot.price * tot.quantity);
    const b = a.reduce((acc, sum) => acc + sum);
    return setPrice(b);
  };
  // const handleRemove = (itemId) => {
  //   const updatedItem = selectedItem.filter((todo) =>{if( todo.id === itemId){
  //     return (todo.id)
  //   }});
  //   return setSelectedItem(updatedItem);
  // };
  useEffect(() => {
    setSelectedItem(items);
  }, []);
  useEffect(() => {
    return () => {
      calculateSum();
    };
  }, [selectedItem]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="w-[80vw] m-auto   ">
        <table className="w-full text-sm text-left text-gray-500 border mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                ÜRÜNLER
              </th>
              <th scope="col" className="px-6 py-3">
                FİYAT
              </th>
              <th scope="col" className="px-6 py-3">
                ADET
              </th>

              <th scope="col" className="px-6 py-3">
                TOPLAM
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedItem.map((item, index) => {
              return (
                <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                  <td className="w-32 p-4 flex font-bold text-2xl ">
                    <span className="flex items-center p-2 hover:cursor-pointer">
                      X
                    </span>
                    <img src={item.img} alt="" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    <span>{item.name}</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    <span>${item.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button
                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button -1</span>
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleDecrement(item.name)}
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          id="first_product"
                          className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                          placeholder={item.quantity}
                          required
                          min={0}
                        />
                      </div>
                      <button
                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button +1</span>
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => handleIncrement(item.name)}
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span onChange={() => setPrice(totalPrice)}>
                      ${item.price * item.quantity}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="p-5 w-1/2">
          <a className="text-start text-xl  font-bold bg-gray-300 hover:bg-gray-400 text-gray-800  py-2 px-4 rounded-l">
            {" "}
            <span className=" text-2xl ">{"<"}</span> GERİ
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center w-[80vw] m-auto">
        <div className="w-1/2 p-5  -mt-20 items-center">
          <h2 className="font-bold text-2xl p-2">Promosyon Kodu</h2>
          <div>
            <span>Kupon Kodu </span>
            <input
              type="text"
              className="border p-2 px-3 text-sm  "
              placeholder="Kupon Kodu"
            />
            <button className=" w-1/4 m-2 sm:w-44 border-solid border-2 star bg-red-primary text-white p-2 px-3 text-sm hover:bg-red-700 active:bg-red-900">
              ONAYLA
            </button>
          </div>
        </div>
        <div className="w-1/2 p-5">
          <h2 className="font-bold text-2xl p-1">Cart Totals</h2>
          <div className="w-10/12 border text-lg ">
            <p className="flex justify-between  border p-1 ">
              Toplam{" "}
              <span className="border-x-1 w-1/2 text-end p-1">${price}</span>
            </p>
            <p className="flex justify-between   border p-1">
              Genel Toplam{" "}
              <span className="border-x-1 w-1/2 text-end p-1">${price}</span>
            </p>
          </div>
          <div className="w-10/12 text-end ">
            <button className=" w-1/3 m-2 sm:w-44 border-solid border-2 star bg-red-primary text-white p-2 px-3 text-sm hover:bg-red-700 active:bg-red-900">
              Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
