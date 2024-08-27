import React from "react";
import { MdVerified } from "react-icons/md";
import Swal from "sweetalert2";

const BrandCard = ({ item, setModalItem }) => {
  const handleAddWishList = (id) => {
    fetch(`https://phone-garage-server-xi.vercel.app/items/${id}`, {
      method: "put",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          return Swal.fire("Product report to admin");
        } else {
          Swal.fire("Already report to admin");
        }
      });
  };

  if (item?.isSold === "sold") {
    return;
  }

  const handleModal = (item) => {
    setModalItem(item);
    console.log(item);
  };
  return (
    <>
      <div class="group relative h-[100%] overflow-hidden  py-6 md:py-10 shadow-xl border rounded-md ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-2  hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg px-4 w-full">
        <span class="absolute top-11 left-10 z-0 h-1 w-1 rounded-full bg-sky-500/20 transition-all duration-500 group-hover:scale-[500]"></span>
        <div class="relative z-10 mx-auto max-w-md">
          <div class="flex items-center space-x-2">
            <img
              src={item.image}
              alt=""
              class="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div class="-space-y-1">
              <h2 class="text-sm font-semibold leading-none">
                {item?.userName}
              </h2>
              <span class="inline-block text-xs leading-none dark:text-gray-400">
                {item?.location}
              </span>
            </div>
            <button title="Open options" type="button">
              <MdVerified />
            </button>
          </div>
          <div class="space-y-2 pt-1 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <img
              src={item?.image}
              alt=""
              class="object-cover object-center w-full h-72 dark:bg-gray-500"
            />
            <div class="p-3">
              <div class="flex items-center justify-between uppercase gap-3">
                <div class="flex items-center space-x-3">
                  <div class="flex items-center justify-center font-semibold">
                    <span class="text-bold">Phone model : {item?.model}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center uppercase">
                <div class="flex flex-col">
                  <span class="text-sm font-md">
                    Condition : {item?.condition}
                  </span>
                  <span class="text-sm font-md">Price : {item?.price}</span>
                </div>
              </div>
              <div class="space-y-4 text-center uppercase">
                <p class="text-sm text-left">
                  Description : {item?.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleAddWishList(item._id)}
                    type="button"
                    title="Report to admin"
                    class="flex items-center justify-center "
                  >
                    <span class="glass rounded-md uppercase text-xs p-2">
                      report to admin
                    </span>
                  </button>
                  <p class="text-xs text-right">Post Date : {item?.postDate}</p>
                </div>

                <label
                  onClick={() => handleModal(item._id)}
                  htmlFor="booking-modal"
                  class="btn glass px-8 text-white"
                >
                  Book Now
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
