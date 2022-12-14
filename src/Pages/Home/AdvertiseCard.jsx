import React from 'react'
import { MdVerified } from "react-icons/md";





const AdvertiseCard = ({ ad }) => {

    if (ad.isSold === 'sold') {
        return
    }

    return (
        <>
            {
                <div className="rounded-md shadow-md dark:bg-gray-900 bg-black dark:text-gray-100">
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-2">
                            <img src={ad.image} alt="" className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                            <div className="-space-y-1">
                                <h2 className="text-sm font-semibold leading-none">{ad?.userName}</h2>
                                <span className="inline-block text-xs leading-none dark:text-gray-400">{ad?.location}</span>
                            </div>
                        </div>
                        <button title="Open options" type="button">
                            <MdVerified />
                        </button>
                    </div>
                    <img src={ad?.image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center font-semibold">
                                    <span className='text-bold'>Phone model : {ad?.model}</span>
                                </div>
                            </div>
                            <button type="button" title="Bookmark post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center pb-1">
                            <div className="flex flex-col">
                                <span className="text-sm font-md">
                                    Condition : {ad?.condition}
                                </span>
                                <span className="text-sm font-md">
                                    Price : {ad?.price}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3 text-center">
                            <p className="text-sm text-left">
                                Description : {ad?.description}
                            </p>
                            <p className="text-xs text-right">
                                Post Date : {ad?.postDate}
                            </p>
                        </div>

                    </div>
                </div>

            }

        </>

    )
}

export default AdvertiseCard