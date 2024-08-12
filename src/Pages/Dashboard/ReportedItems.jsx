import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmModal from "../ConfirmModal";

const ReportedItems = () => {
  const [deleteItem, setDeleteItem] = useState(null);

  const closeModal = () => {
    setDeleteItem(null);
  };

  const { data: reportItem = [], refetch } = useQuery({
    queryKey: ["item"],
    queryFn: async () => {
      const res = await fetch(
        `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/items`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(reportItem);
  const handleDelete = (user) => {
    fetch(
      `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/items/${user._id}`,
      {
        method: "delete",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  console.log(reportItem);
  return (
    <div className="p-2 mx-auto sm:p-4 dark:text-gray-100 overflow-x-clip">
      <h2 className="mb-4 md:text-4xl sm:text-2xl font-semibold leading-tight">
        Reported Items
      </h2>
      {reportItem.length === 0 ? (
        <h2>No item reported</h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Brand</th>
                <th className="p-3">Posted Date</th>
                <th className="p-3">Phone Model</th>
                <th className="p-3">Posted By</th>
                <th className="p-3 text-left">Admin Action</th>
              </tr>
            </thead>
            <tbody>
              {reportItem.map(
                (user, i) =>
                  user.report && (
                    <>
                      <tr
                        key={user._id}
                        className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                      >
                        <td className="p-3">
                          <p>{user.name}</p>
                        </td>
                        <td className="p-3">
                          <p>{user.postDate}</p>
                        </td>
                        <td className="p-3">
                          <p>{user?.model}</p>
                        </td>
                        <td className="p-3">
                          <p>{user?.userName}</p>
                        </td>
                        <td className="p-3 text-left">
                          <label
                            onClick={() => setDeleteItem(user)}
                            htmlFor="confirmation-modal"
                            className="btn btn-sm btn-error cursor-pointer"
                          >
                            Delete
                          </label>
                        </td>
                      </tr>
                    </>
                  )
              )}
            </tbody>
          </table>
        </div>
      )}
      {deleteItem && (
        <ConfirmModal
          title="Are you sure you want to delete this item?"
          successAction={handleDelete}
          successButtonName="Delete"
          modalData={deleteItem}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default ReportedItems;
