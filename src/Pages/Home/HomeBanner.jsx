import React from 'react'
import homeBanner from '../../assets/homeBanner.svg';
import { TiTick } from "react-icons/ti";
const HomeBanner = () => {
    return (
        <div className='px-4 py-5 w-full mx-auto sm:max-w-full md:max-w-full lg:w-full md:px-24 lg:px-10 flex flex-col md:flex-row justify-center items-center'>
            <div className='lg:w-1/2 lg:h-1/2 w-full h-full'>
                <h1 className='text-2xl mb-4 md:text-4xl lg:text-5xl font-bold'>Sell your Mobile Phone for <br className='hidden lg:block' /> Instant Cash</h1>
                <h2 className='text-sm mb-4 md:text-xl lg:text-2xl font-bold '>It's A Buyer And Seller Paradise</h2>
                <span className='md:space-x-2 space-x-0 text-center text-sm md:text-base'> <TiTick className='inline text-2xl' />Maximum Value
                    <TiTick className='inline text-2xl' /> Safe & Hassle-free
                    <TiTick className='inline text-2xl' />Free Doorstep Pickup
                </span> <br />
                <a href='#brands' className="btn glass my-5 px-8">Buy Now</a>
            </div>
            <div className='lg:w-1/2 lg:h-1/2 w-full h-full'>
                <img src={homeBanner} alt="" />
            </div>

        </div>
    )
}

export default HomeBanner