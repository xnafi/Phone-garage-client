import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../Shared/Loading'
import CatagoryCard from './CatagoryCard'

const CatagoryPage = () => {
    const { data: brands = [], isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const req = await fetch('http://localhost:5000/brands')
            const data = await req.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading />
    }
    console.log(brands);
    return (
        <div className='my-20 px-4 lg:px-10' id='brands'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 uppercase'>Choose your brand</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    brands.slice(0, 3).map(brand => <CatagoryCard key={brand._id} brand={brand} />)
                }

            </div>
        </div>
    )
}

export default CatagoryPage