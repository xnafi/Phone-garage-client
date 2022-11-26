import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

const AddPhone = () => {

    const { user } = useContext(AuthContext)
    const day = new Date().getDate()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    const currentDate = `${day}/${month}/${year}`
    const { register, handleSubmit, reset } = useForm();

    const option = [
        {
            condition: 'Excellent'
        },
        {
            condition: 'Good'
        },
        {
            condition: 'Fair'
        },
    ]
    const brands = [
        {
            brand: 'Iphone'
        },
        {
            brand: 'Xiomi'
        },
        {
            brand: 'Huawei'
        },
    ]

    const onSubmit = (data) => {
        const formImage = data.image[0]
        const formData = new FormData()
        formData.append('image', formImage)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB}`, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url
                    const newItem = {
                        userName: user?.displayName,
                        userImage: user?.photoURL,
                        email: user.email,
                        name: data.brand,
                        model: data.model,
                        image: image,
                        condition: data.condition,
                        location: data.location,
                        price: data.price,
                        description: data.description,
                        isSold: false,
                        advertise: false,
                        wishList: false,
                        postDate: currentDate
                    }
                    fetch(`http://localhost:5000/items`, {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newItem)
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.acknowledged) {
                                Swal.fire('Phone added successfully')
                                reset()
                            }
                        })
                }
            })



    }


    return (

        <div className='md:my-20 my-10 flex z-30'>
            <div className="w-full max-w-md md:p-8 p-2 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 bg-neutral">
                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid text-gray-400">
                    <div className="dropdown w-full space-y-1 text-sm text-gray-400">
                        <label for="role" className="block dark:text-gray-400">Select Brand</label>
                        <select {...register("brand", { required: true })} className="select w-full bg-white">
                            {
                                brands.map(sp => <option key={sp._id}>{sp.brand}</option>)

                            }
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="Model" className="block dark:text-gray-400">Phone Model</label>
                        <input type="text"  {...register("model", { required: true })} id="Model" placeholder="Phone Model" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 " />
                    </div>
                    <div className="space-y-1 text-sm text-gray-400">
                        <label for="image" className="block dark:text-gray-400">Product Image</label>
                        <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full px-4 bg-white rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 " />
                    </div>
                    <div className="dropdown w-full space-y-1 text-sm text-gray-400">
                        <label for="role" className="block dark:text-gray-400">Condition</label>
                        <select {...register("condition", { required: true })} className="select w-full bg-white">
                            {
                                option.map(sp => <option key={sp._id}>{sp.condition}</option>)

                            }
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="Location" className="block dark:text-gray-400">Loctaion</label>
                        <input type="text"  {...register("location", { required: true })} id="Location" placeholder="Location" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="Price" className="block dark:text-gray-400">Price</label>
                        <input type="number"  {...register("price", { required: true })} id="Price" placeholder="Phone price" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div class="form-group mb-6">
                        <textarea
                            className=" form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
 
                                "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Description"
                            {...register("description", { required: true })}
                        ></textarea>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 btn glass">Add</button>
                </form>
            </div>
        </div>

    )
}


export default AddPhone