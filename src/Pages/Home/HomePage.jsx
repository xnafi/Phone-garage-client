import React from 'react'
import homeBanner from '../../assets/homeBanner.svg';
import { TiTick } from "react-icons/ti";
const HomePage = () => {
    return (
        <div className='px-4 py-5 w-full mx-auto sm:max-w-full md:max-w-full lg:w-full md:px-24 lg:px-10 flex flex-col md:flex-row justify-center items-center'>
            <div className='w-1/2 h-1/2'>
                <h1 className='text-3xl mb-4 md:text-4xl lg:text-5xl font-bold'>Sell your Mobile Phone for <br /> Instant Cash</h1>
                <span className='space-x-2'> <TiTick className='inline text-2xl' />Maximum Value
                    <TiTick className='inline text-2xl' /> Safe & Hassle-free
                    <TiTick className='inline text-2xl' />Free Doorstep Pickup
                </span>
                <button className="btn glass my-5 block px-8">Buy Now</button>
            </div>
            <div className='w-1/2 h-1/2'>
                <img src={homeBanner} alt="" />
            </div>

        </div>
    )
}

export default HomePage