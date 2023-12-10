import React from 'react'
import SectionTitle from './SectionTitle'
import trustees from 'const/trustees'
import "components/shared/styles/trustees.css"

export default function Trustees() {
    return (
        <>
            <section id='trustees'>
                <div className='padding-block-600 section-margin'>
                    <SectionTitle
                        mini={"Trustees"}
                        title={"We're Trusted By Top Companies "}
                        desc={"We work with a wide range of companies from various indructries, including tech, retail, finance, and more."}
                    />
                    <div className="trustees">
                        {trustees.map(trustee => <div key={trustee.id} className='trustee'>
                            {trustee.icon}
                            <p className='fs-200 fw-semi-bold'>{trustee.companyName}</p>
                        </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}
