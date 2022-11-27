import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ modalItem }) => {
    console.log('====================================');
    console.log(modalItem);
    console.log('====================================');
    const { user } = useContext(AuthContext)

    // const price = 'Price' + ${ modalItem?.price }
    // console.log("🚀 ~ file: BookingModal.jsx ~ line 13 ~ BookingModal ~ price", price)
    const handleBooking = event => {


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
                        <input name="phone" type="text" required placeholder="Phone Number" className="input w-full input-bordered" />
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