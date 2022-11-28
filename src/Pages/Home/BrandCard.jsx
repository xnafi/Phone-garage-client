import React, { useContext, useState } from 'react'
import { MdVerified } from "react-icons/md";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import BookingModal from '../Shared/BookingModal';




const BrandCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [modalItem, setModalItem] = useState({})
    const handleAddWishList = (id) => {
        fetch(`http://localhost:5000/items/${id}`, {
            method: 'put',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    return Swal.fire('Product report to admin')
                } else {
                    Swal.fire('Already report to admin')
                }


            })
    }
  
    const handleModal = (item) => {
        setModalItem(item)
    }
    console.log(modalItem)
    return (
        <div className="rounded-md shadow-md dark:bg-gray-900 bg-black dark:text-gray-100">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img src={item.image} alt="" className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{item?.userName}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-400">{item?.location}</span>
                    </div>
                </div>
                <button title="Open options" type="button">
                    <MdVerified />
                </button>
            </div>
            <img src={item?.image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
                <div className="flex items-center justify-between uppercase">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center font-semibold">
                            <span className='text-bold'>Phone model : {item?.model}</span>
                        </div>
                    </div>
                    <button onClick={() => handleAddWishList(item._id)} type="button" title="Report to admin" className="flex items-center justify-center">
                        <span className='glass rounded-md uppercase text-xs p-2'>report to admin</span>
                    </button>
                </div>
                <div className="flex items-center uppercase">
                    <div className="flex flex-col">
                        <span className="text-sm font-md">
                            Condition : {item?.condition}
                        </span>
                        <span className="text-sm font-md">
                            Price : {item?.price}
                        </span>
                    </div>
                </div>
                <div className="space-y-3 text-center uppercase">
                    <p className="text-sm text-left">
                        Description : {item?.description}
                    </p>
                    <p className="text-xs text-right">
                        Post Date : {item?.postDate}
                    </p>
                    <label
                        onClick={() => handleModal(item)}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                    >
                        Book Now
                    </label>

                </div>
            </div>
            <BookingModal modalItem={modalItem} />
        </div >
    )
}

export default BrandCard