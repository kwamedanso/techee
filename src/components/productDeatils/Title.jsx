import React from 'react'
import { Link } from 'react-router-dom'
import AddFavorite from 'components/shared/AddFavorite'
import { IoMdArrowBack } from "react-icons/io"


export default function Title({ id }) {
    return (
        <div className="product-details-title margin-block-100">
            <Link to={-1} className="back-button"><IoMdArrowBack /></Link>
            <p className='fs-300 fw-semi-bold'>Product Details</p>
            <AddFavorite id={id} />
        </div>
    )
}
