import React, { Fragment } from 'react'
import { BsStarHalf, BsStarFill } from "react-icons/bs"
import "components/shared/styles/starRating.css"

export default function StarRating({ starRating }) {

    let stars = []
    for (let i = 0; i < Math.floor(starRating); i++) {
        stars.push(<BsStarFill />)
    }

    if (starRating % 1 !== 0) {
        stars.push(<BsStarHalf />)
    }
    return (
        <div className='star-rating fs-200'>
            {stars.map((star, index) => <Fragment key={index}>{star}</Fragment>)}
            {starRating}
        </div>
    )
}
