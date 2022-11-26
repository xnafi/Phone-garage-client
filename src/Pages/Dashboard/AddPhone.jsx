import React from 'react'
import { useForm } from 'react-hook-form';

const AddPhone = () => {

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
        console.log(data.description)
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
                        <input type="text"  {...register("Model", { required: true })} id="Model" placeholder="Phone Model" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 " />
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
                        <label for="Location" className="block dark:text-gray-400">Loction</label>
                        <input type="text"  {...register("Location", { required: true })} id="Location" placeholder="Location" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="Price" className="block dark:text-gray-400">Price</label>
                        <input type="number"  {...register("Price", { required: true })} id="Price" placeholder="Phone price" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
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