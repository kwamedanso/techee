import Benefits from 'components/shared/Benefits'
import Category from 'components/home/Category'
import Faq from 'components/shared/Faq'
import Trustees from 'components/shared/Trustees'
import React from 'react'
import ScrollToTop from 'components/shared/ScrollToTop'
import Hero from 'components/home/Hero'

export default function Home() {

    return (
        <>
            <ScrollToTop />
            <Hero />
            <Trustees />
            <Category />
            <Benefits />
            <Faq />
        </>
    )
}
