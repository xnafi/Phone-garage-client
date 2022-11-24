import React from 'react'
import AdvertisePage from './AdvertisePage'
import CatagoryPage from './CatagoryPage'
import HomeBanner from './HomeBanner'
import WhyUs from './WhyUs'

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <AdvertisePage />
            <CatagoryPage />
            <WhyUs />
        </>
    )
}

export default HomePage