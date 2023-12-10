import React from 'react'
import ProductCard from './ProductCard'
import "components/shared/styles/availableProducts.css"


export default function AvailableProducts({ availableProducts, category }) {
    return (
        <>
            <div className={` ${category ? "similar-products" : "available-products"}`}>
                {availableProducts?.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </>
    )
}
