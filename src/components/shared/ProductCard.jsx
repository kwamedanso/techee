import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { Link } from 'react-router-dom';
import "components/shared/styles/productCard.css"
import AddFavorite from './AddFavorite';

export default function ProductCard({ id, brand, price, model, starRating, colors, images }) {
    let image = Object.values(colors[0])
    const totalSold = (price + 20).toFixed(0);

    const prevPrice = (price + 20).toFixed(2);


    return (
        <>
            <div className='product-card fw-semi-bld'>
                <div className="product-image-wrapper">
                    <Link to={`/productDetails/${id}`}>
                        <img src={image[0]} alt={model} loading='lazy' />
                    </Link>
                </div>
                <div className="produc-card-details">
                    <div className='product-card-header'>
                        <div className='product-card-desc'>
                            <p className='fs-400 fw-bold flex gap-100'>
                                ${price}
                                <span style={{ textDecoration: "line-through" }} className='fs-150 op-200 fw-semi-bold'>${prevPrice}</span>
                            </p>
                            <p className='fs-200 fw-semi-bol margin-block-100'>{brand} {model}</p>
                        </div>
                        <div className="product-card-colors">
                            {colors.map((color, index) => <div key={index} className='product-card-color' style={{ backgroundColor: Object.keys(color)[0] }}></div>)}
                        </div>
                    </div>
                    <div className="product-card-footer">
                        <p className='fs-200'><AiFillStar />{starRating}</p>
                        <p className='fs-200'>{totalSold} Sold</p>
                    </div>
                </div>
                <AddFavorite card id={id} />
            </div>
        </>
    )
}
