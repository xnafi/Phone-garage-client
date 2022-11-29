import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CheckOutPage from './CheckOutPage';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
;
const Payment = () => {
    const paymentDetails = useLoaderData()

    return (
        <div className='my-10 px-4 lg:px-10 items-center'>
            <div>
                <h2 className='text-2xl font-bold'>Payment for {paymentDetails?.productName} model {paymentDetails.productModel}</h2>
                <h2 className='text-xl font-semibold'>Please pay {paymentDetails?.productPrice}</h2>
                <div className='md:w-1/2 w-full'>
                    <Elements stripe={stripePromise}>
                        <CheckOutPage paymentDetails={paymentDetails} />
                    </Elements>
                </div>

            </div >
        </div>

    )
}

export default Payment