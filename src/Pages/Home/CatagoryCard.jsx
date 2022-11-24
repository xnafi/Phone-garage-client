import React from 'react'
import { Link } from 'react-router-dom'

const CatagoryCard = ({ brand }) => {
    const { image, name, _id } = brand
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-56 bg-gray-300 bg-center bg-contain bg-no-repeat rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <Link to={`/brands/${_id}`} className="flex items-center text-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>
                </Link>
            </div>
        </div>
    )
}

export default CatagoryCard