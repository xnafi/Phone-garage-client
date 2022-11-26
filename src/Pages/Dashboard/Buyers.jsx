import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import ConfirmModal from '../ConfirmModal'
import Loading from '../Shared/Loading'

const Buyers = () => {
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
        setDeleteUser(null);
    }
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers', 'buyers/:id'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/buyers`)
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (user) => {
        fetch(`http://localhost:5000/users/buyers/${user._id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })

    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="p-2 mx-auto sm:p-4 dark:text-gray-100 overflow-x-clip">
            <h2 className="mb-4 md:text-4xl sm:text-2xl font-semibold leading-tight">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3"></th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3 text-left">Admin Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((user, i) =>
                                <>
                                    {
                                        user.isAdmin === false &&
                                        <tr key={user._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                            <td className="p-3">
                                                <p>{i + 1}</p>
                                            </td>
                                            <td className="p-3">
                                                <div className="avatar">
                                                    <div className="w-12 rounded-full">
                                                        <img src={user?.image} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <p>{user?.name}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{user?.email}</p>
                                            </td>
                                            <td className="p-3 text-left">
                                                <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error cursor-pointer">Delete</label>
                                            </td>
                                        </tr>
                                    }

                                </>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteUser.name}. It cannot be undone.`}
                    successAction={handleDelete}
                    successButtonName="Delete"
                    modalData={deleteUser}
                    closeModal={closeModal}
                >
                </ConfirmModal>
            }
        </div>
    )
}

export default Buyers