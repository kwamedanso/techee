import React from 'react'

export default function Price({ price }) {
    return (
        <>
            <div className='padding-block-100'>
                <p className='fs-500 fw-semi-bold'>${price.toFixed(2)}</p>
                <p className='padding-block-50'>Suggested payments with 6 months special financing <span className='fw-semi-bold'>({(price / 6).toFixed(2)}/month)</span></p>
            </div><hr />
        </>
    )
}
