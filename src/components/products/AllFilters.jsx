import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import scrollToTop from 'utils/SCROLLT0TOP';
import "components/products/styles/allFilters.css"

const categories = ["Phones", "Laptops", "Headsets", "Watch", "Tablets", "Console"]
const brands = ["Apple", "Samsung", "Asus", "Dell", "Lenovo", "MSI", "Sony", "JBL", "Google", "Beats"]

export default function AllFilters({ active, handleFilterButton, getBrandSelection, getCategorySelection, getPriceRange, minPrice, maxPrice, brand, category }) {
    const [pricing, setPricing] = useState({ priceMin: "", priceMax: "" })

    function changePricing(e) {
        let { name, value } = e.target;
        // console.log(name, value)

        setPricing({ ...pricing, [name]: value })
        if (name === "priceMin") {
            getPriceRange(value, pricing.priceMax)
        } else {
            getPriceRange(pricing.priceMin, value)
        }
    }



    function selectionChange(e) {
        let { value, name } = e.target
        if (name === "brand") {
            getBrandSelection(value)
        } else {
            getCategorySelection(value)
        }
        scrollToTop()
    }



    return (
        <div className={`filter-wrapper ${active ? "active" : ""}`}>
            <div className="filter-title padding-block-50">
                <p className='fs-400 fw-bold'>Filter</p>
                <p onClick={handleFilterButton} className='filter-close-button'><RxCross2 /></p>
            </div>
            <hr />


            <div className="filter-body">
                <div className="filter-by-price padding-block-10">
                    <p className='title-flex margin-block-50'>
                        <span className='fs-250 fw-semi-bold'>Price</span>
                        <span className='op-200'>{`${minPrice || "0"} to ${maxPrice || "max"}`}</span>
                    </p>
                    <div className="pricing">
                        <div className="pricing-min pricing-item">
                            <span>$</span>
                            <input type="number" name="priceMin" id="priceMin" value={pricing.priceMin} onChange={changePricing} placeholder={"0"} />
                        </div>
                        <div className="pricing-divider"></div>
                        <div className="pricing-max  pricing-item">
                            <span>$</span>
                            <input type='number' name="priceMax" id="priceMax" value={pricing.priceMax} onChange={changePricing} placeholder={"100"} />
                        </div>
                    </div>
                </div>

                <div className="filter-by-category padding-block-10">
                    <p className='margin-block-50 title-flex'>
                        <span className='fs-250 fw-semi-bold'>Category</span>
                        <span className='op-200'>{category}</span>
                    </p>
                    <div className="category-body padding-block-50">
                        {categories.map(item => <div key={item}>
                            <label htmlFor={item} className="category-item">
                                <input type="radio" name="category" id={item} value={item} onChange={selectionChange} />
                                {item}
                            </label>
                        </div>)}
                    </div>
                </div>

                <div className="filter-by-brand padding-block-5000">
                    <p className=' margin-block-50 title-flex'>
                        <span className='fs-250 fw-semi-bold'>Brand</span>
                        <span className='op-200'>{brand}</span>
                    </p>
                    <div className="brands-body padding-block-50">
                        {brands.map(item => <div key={item}>
                            <label htmlFor={item} className="category-item">
                                <input type="radio" name="brand" id={item} value={item} onChange={selectionChange} />
                                {item}
                            </label>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
