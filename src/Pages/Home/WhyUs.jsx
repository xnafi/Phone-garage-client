import React from 'react'
import { MdLocalOffer } from "react-icons/md";
import { FaHandsWash, FaTruckPickup } from "react-icons/fa";
import { GiCardExchange} from "react-icons/gi";
import { AiFillSafetyCertificate} from "react-icons/ai";
import { GrValidate } from "react-icons/gr";
const WhyUs = () => {
    const whyUs = [
        {
            id: 1,
            icon: <MdLocalOffer />,
            name: 'Best Prices',
            ptag: 'Objective AI-based pricing'
        },
        {
            id: 2,
            icon: < GiCardExchange />,
            name: 'Instant Payment',
            ptag: 'Instant Money Transfer in your preferred mode at time of pick up or store drop off'
        },
        {
            id: 3,
            icon: <FaHandsWash />,
            name: 'Simple & Convenient',
            ptag: 'Check price, schedule pickup & get paid,'
        },
        {
            id: 4,
            icon: <FaTruckPickup />,
            name: 'Free Doorstep Pickup',
            ptag: 'No fees for pickup across 1500 cities across Bangladesh'
        },
        {
            id: 5,
            icon: <AiFillSafetyCertificate/>,
            name: 'Factory Grade Data Wipe',
            ptag: '100% Safe and Data Security Guaranteed'
        },   {
            id: 6,
            icon: <GrValidate/>,
            name: 'Valid Purchase Invoice',
            ptag: 'Genuine Bill of Sale'
        },

    ]
    return (
      <div className="my-20 px-4 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 uppercase">
          Why Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-4">
          {whyUs.map((item) => (
            <div
              key={item.id}
              className="card card-side  text-info shadow-xl bg-[#ECF9F8] hover:scale-105 transition-all px-3 py-1"
            >
              <figure>{item.icon}</figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.ptag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default WhyUs