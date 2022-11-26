import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../Shared/Loading'

const Sellers = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/sellers`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 md:text-4xl sm:text-2xl font-semibold leading-tight">All Sellers</h2>
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
                        {
                            users.map((user, i) => <tr key={users._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
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
                                <td className="p-3">
                                    {
                                        user?.verify === false ? <button className='btn-sm'>Verify Now</button> : <button className='btn-sm disabled pointer-events-none'>Verified</button>
                                    }
                                </td>
                                <td className="p-3 text-center">
                                    {
                                        user?.isAdmin === false ? <button className='btn-sm'>Make Admin</button> : <button className='btn-sm disabled pointer-events-none'>Admin</button>
                                    }
                                </td>
                                <td className="p-3 text-center">
                                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Delete</span>
                                    </span>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sellers