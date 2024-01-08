import Benefits from 'components/shared/Benefits'
import Faq from 'components/shared/Faq'
import Trustees from 'components/shared/Trustees'
import Category from 'components/home/Category'
import React from 'react'
import ScrollToTop from 'components/shared/ScrollToTop'
import Hero from 'components/home/Hero'
import CTA from 'components/home/CTA'

export default function Home() {

    return (
        <>
            <ScrollToTop />
            <Hero />
            <Trustees />
            <Category />
            <Benefits />
            <Faq />
            <CTA />
        </>
    )
}
