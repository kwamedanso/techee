import React from 'react';
import SectionTitle from './SectionTitle';
import "components/shared/styles/benefits.css";
import OurAdvantages from './OurAdvantages';


export default function Benefits() {
    return (
        <div className='benefits-wrapper padding-block-600 section-margin'>
            <SectionTitle
                mini="Benefits with us"
                title='What are our advantages compared to others'
                desc="Choose us for top-notch quality, exceptional customer service, and a seamless shopping experience. Join us today!"
            />
            <OurAdvantages />
        </div>
    )
}  