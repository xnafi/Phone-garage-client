import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    data: myItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(
        `https://phone-garage-server-xi.vercel.app/booking?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    fetch(`https://phone-garage-server-xi.vercel.app/booking/${id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-10 px-4 lg:px-10 items-center">
      <div className="p-2 mx-auto sm:p-4 dark:text-gray-100 overflow-x-clip">
        <h2 className="mb-4 md:text-4xl sm:text-2xl font-semibold leading-tight">
          Manage items
        </h2>
        {myItems.length === 0 ? (
          <h2>No item added</h2>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700">
                <tr className="text-left">
                  <th className="p-3">Brand</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Model</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Payment</th>
                  <th className="p-3 text-left">Admin Action</th>
                </tr>
              </thead>
              <tbody>
                {myItems.map((item, i) => (
                  <>
                    <tr
                      key={item._id}
                      className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                    >
                      <td className="p-3">
                        <p>{item?.productName}</p>
                      </td>
                      <td className="p-3">
                        <div className="avatar">
                          <div className="w-24 rounded">
                            <img src={item?.productImage} alt="" />
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <p>{item?.productModel}</p>
                      </td>
                      <td className="p-3">
                        <p>{item?.productPrice}</p>
                      </td>
                      <td className="p-3 text-left">
                        {item.isSold === "sold" ? (
                          <button
                            className="btn btn-sm cursor-pointer"
                            disabled
                          >
                            paid
                          </button>
                        ) : (
                          <Link
                            to={`/payment/${item?._id}`}
                            className="btn btn-sm btn-error cursor-pointer"
                          >
                            PAY
                          </Link>
                        )}
                      </td>
                      <td className="p-3 text-left">
                        <label
                          onClick={() => handleDelete(item?._id)}
                          className="btn btn-sm btn-error cursor-pointer"
                        >
                          Delete
                        </label>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
