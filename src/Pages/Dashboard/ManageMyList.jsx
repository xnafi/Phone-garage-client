import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import ConfirmModal from "../ConfirmModal";
import Loading from "../Shared/Loading";

const ManageMyList = () => {
  const { user } = useContext(AuthContext);
  const [deleteItem, setDeleteItem] = useState(null);

  const closeModal = () => {
    setDeleteItem(null);
  };

  const {
    data: myItems = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["email"],
    queryFn: async () => {
      const res = await fetch(
        `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/items?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (item) => {
    fetch(
      `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/items/${item._id}`,
      {
        method: "delete",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  const handleAdvertisc = (id) => {
    fetch(
      `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/items/${id}`,
      {
        method: "post",
        headers: { "content-type": "application/json" },
      }
    )
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
                <th className="p-3">Advertisc</th>
                <th className="p-3">Post date</th>
                <th className="p-3">Sell status</th>
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
                      <p>{item.name}</p>
                    </td>
                    <td className="p-3">
                      {item?.advertise === false ? (
                        <button
                          onClick={() => handleAdvertisc(item._id)}
                          className="btn btn-xs glass"
                        >
                          Click to promote
                        </button>
                      ) : (
                        <p>Promoted</p>
                      )}
                    </td>
                    <td className="p-3">
                      <p>{item?.name}</p>
                    </td>
                    <td className="p-3">
                      {item.isSold === "noSold" ? <p>Not sold</p> : <p>Sold</p>}
                    </td>
                    <td className="p-3 text-left">
                      <label
                        onClick={() => setDeleteItem(item)}
                        htmlFor="confirmation-modal"
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

      {deleteItem && (
        <ConfirmModal
          title="Are you sure you want to delete the item?"
          successAction={handleDelete}
          successButtonName="Delete"
          modalData={deleteItem}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default ManageMyList;
