import React from 'react'
import AdvertisePage from './AdvertisePage'
import CatagoryPage from './CatagoryPage'
import HomeBanner from './HomeBanner'

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <AdvertisePage />
            <CatagoryPage />
        </>
    )
}

export default HomePage