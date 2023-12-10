import React from 'react'
import StarRating from 'components/shared/StarRating'


export default function Description({ brand, model, starRating, description }) {

    return (
        <>
            <div className='padding-block-100'>
                <p className='fs-550 fw-bold'>{brand} {model}</p>
                <p className='padding-block-50 fs-200'>{description}</p>
                <StarRating starRating={starRating} />
            </div><hr />
        </>
    )
}