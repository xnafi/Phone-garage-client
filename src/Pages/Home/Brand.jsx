import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import BrandCard from './BrandCard'

const Brand = ({ }) => {
    const brand = useLoaderData()
    const name = brand?.name
    const { data: data = [], isLoading, refetch } = useQuery({
        queryKey: ['name'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/items?name=${name}`)
            const data = await res.json()
            return data
        }
    })
    console.log(data);
    return (
        <>
            <div className='my-10 px-4 lg:px-10 items-center'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 uppercase'>{name}</h2>
                {
                    data?.length === 0 ? <h2 className='text-center text-3xl'>No data found</h2> :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center md:gap-6'>
                            {
                                data.map(item => <BrandCard key={item._id} item={item} />)
                            }
                        </div>
                }
            </div>
            <div className='flex justify-center items-center'>
                <Link to='/' className="btn glass my-5 px-8 mx-auto">Back to</Link>
            </div>
        </>
    )
}

export default Brand