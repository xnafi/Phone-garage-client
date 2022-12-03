import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from './Loading';

const BookingModal = ({ modalItem }) => {
    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleBooking = event => {
        event.preventDefault()
        const newBooking = {
            bookingUserEmail: user?.email,
            productName: modalItem?.name,
            productImage: modalItem?.image,
            productModel: modalItem?.model,
            productId: modalItem?._id,
            productPrice: modalItem?.price,
            bookingUserNumber: event.target.number
        }
        fetch(`https://phone-garage-server-xi.vercel.app/booking`, {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire('Item booked successfully')
                    event.target.reset()
                    navigate('/mybooking')
                }
            })

    }
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <h3 className="text-md font-bold uppercase">phone {modalItem?.name}</h3>
                    </div>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" defaultValue={user?.displayName} readOnly type="text" required placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" defaultValue={user?.email} readOnly type="email" required placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="text" defaultValue={modalItem?.model} readOnly type="text" required placeholder="Phone Model" className="input w-full input-bordered" />
                        <input name="text" defaultValue={modalItem?.price} readOnly type="text" required placeholder="Phone Price" className="input w-full input-bordered" />
                        <input name="text" type="text" required placeholder="Meet location" className="input w-full input-bordered" />
                        <input name="phone" type="number" required placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        {
                            user ? <input className='btn btn-accent w-full' type="submit" value="Submit" /> : <Link to="/login" className='btn btn-accent w-full'>Please Login First</Link>
                        }
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;