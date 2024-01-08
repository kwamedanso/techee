import React from 'react'
import "components/home/styles/finalCta.css"
import { useNavigate } from 'react-router-dom'

export default function CTA() {
    const navigate = useNavigate();


    return (
        <div className='margin-block-600'>
            <div className='final-cta section-margin text-align'>
                <div className='padding-block-600'>
                    <p className='fs-400'>Ready to get started?</p>
                    <p className='fs-400 fw-semi-bold'>Visit our products page</p>
                    <button
                        className='button margin-block-200'
                        data-type='bg-blue'
                        onClick={() => navigate("/products")}
                    >
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    )
}
