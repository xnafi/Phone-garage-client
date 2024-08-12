import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmModal from "../ConfirmModal";
import Loading from "../Shared/Loading";
import Swal from "sweetalert2";

const Sellers = () => {
  const [deleteSeller, setDeleteSeller] = useState(null);

  const closeModal = () => {
    setDeleteSeller(null);
  };
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers", "id", "email"],
    queryFn: async () => {
      const res = await fetch(
        `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/users/sellers`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (user) => {
    fetch(
      `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/users/sellers/${user?._id}`,
      {
        method: "delete",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        Swal.fire("User deleted");
      })
      .catch((er) => console.log(er));
  };

  const handleVerify = (id) => {
    fetch(
      `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/users/sellers/${id}`,
      {
        method: "post",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Seller Verified");
          refetch();
        }
      })
      .catch((er) => console.log(er));
  };
  const handleVerifyAdmin = (email) => {
    fetch(
      `https://phone-garage-server-4aoy7fjf0-forhad-khans-projects-96a1cae2.vercel.app/users/sellers/${email}`,
      {
        method: "put",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Set seller as a admin");
          refetch();
        }
      })
      .catch((er) => console.log(er));
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 md:text-4xl sm:text-2xl font-semibold leading-tight">
        All Sellers
      </h2>
      {sellers.length === 0 ? (
        <h2>No sellers</h2>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3"></th>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Varify</th>
                <th className="p-3 text-center">Admin</th>
                <th className="p-3">Admin Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((user, i) => (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="p-3">
                    <p>{i + 1}</p>
                  </td>
                  <td className="p-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={user?.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <p>{user?.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.email}</p>
                  </td>
                  <td className="p-3">
                    {user?.verify === false ? (
                      <button
                        onClick={() => handleVerify(user?._id)}
                        className="btn-sm glass"
                      >
                        Verify Now
                      </button>
                    ) : (
                      <button className="btn-sm disabled pointer-events-none">
                        Verified
                      </button>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {user?.isAdmin === false ? (
                      <button
                        onClick={() => handleVerifyAdmin(user?.email)}
                        className="btn-sm glass"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button className="btn-sm disabled pointer-events-none">
                        Admin
                      </button>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <label
                      onClick={() => setDeleteSeller(user)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm glass"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {deleteSeller && (
        <ConfirmModal
          title="Are you sure you want to delete the user?"
          successAction={handleDelete}
          successButtonName="Delete"
          modalData={deleteSeller}
          closeModal={closeModal}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default Sellers;
