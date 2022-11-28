import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const MyBooking = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const { data: myItems = [] } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    console.log(myItems);
    return (

        <div className="p-2 mx-auto sm:p-4 dark:text-gray-100 overflow-x-clip">
            <h2 className="mb-4 md:text-4xl sm:text-2xl font-semibold leading-tight">Manage items</h2>
            {
                myItems.length === 0 ? <h2>No item added</h2>
                    : <div className="overflow-x-auto">
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
                                {
                                    myItems.map((item, i) =>
                                        <>
                                            <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p>{item.productName}</p>
                                                </td>

                                                <td className="p-3">
                                                    <p>{item?.productModel}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item?.productPrice}</p>
                                                </td>
                                                <td className="p-3 text-left">
                                                    <label className="btn btn-sm btn-error cursor-pointer">PAY</label>
                                                </td>
                                                <td className="p-3 text-left">
                                                    <label className="btn btn-sm btn-error cursor-pointer">Delete</label>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default MyBooking