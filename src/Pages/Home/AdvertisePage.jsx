import React from 'react'
import AdvertiseCard from './AdvertiseCard'

const AdvertisePage = () => {
    return (
        <div className='my-20 px-4 lg:px-10 items-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 uppercase'>Advertise</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center md:gap-6'>
                <AdvertiseCard />
                <AdvertiseCard />
                <AdvertiseCard />
            </div>
        </div>

    )
}

export default AdvertisePage