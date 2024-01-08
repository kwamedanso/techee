import React from 'react'
import "components/success/success.css"
import { Link } from 'react-router-dom';
import payment from "assets/payment.png"
import ScrollToTop from 'components/shared/ScrollToTop';


export default function Success() {
    return (
        <div className='success-page section-margin text-align fs-300'>
            <ScrollToTop />
            <div>
                <div className='margin-block-100'>
                    <img src={payment} alt="payment" />
                </div>
                <p className='margin-block-500 fw-semi-bold'>Congratulations on your purchase...</p>
                <p className='fs-250 op-200'>Your order is confirmed. You will receive and order confirmation email/SMS shortly with the expected delievery date for your items.</p>
                <div className='margin-block-500'>
                    <Link to={"/"} data-type='bg-blu'>Back to home</Link>
                </div>
            </div>
        </div>
    )
}
