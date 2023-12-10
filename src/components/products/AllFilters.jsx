import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import scrollToTop from 'utils/SCROLLT0TOP';
import Expand from './Expand';
import "components/products/styles/allFilters.css"

const categories = ["Phones", "Laptops", "Headsets", "Watch", "Tablets", "Console"]
const brands = ["Apple", "Samsung", "Asus", "Dell", "Lenovo", "MSI", "Sony", "JBL", "Google", "Beats"]

export default function AllFilters({ active, handleFilterButton, getBrandSelection, getCategorySelection }) {
    const [pricing, setPricing] = useState({ priceMin: undefined, priceMax: undefined })

    function changePricing(e) {
        let { name, value } = e.target;
        console.log(name, value)
        setPricing({ ...pricing, [name]: value })
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
                <Expand title={"Price Range"}>
                    <div className="filter-by-price padding-block-100">
                        <div className="pricing">
                            <div className="pricing-min pricing-item">
                                <span>$</span>
                                <input type="number" name="priceMin" id="priceMin" value={pricing.priceMin} onChange={changePricing} placeholder='0' />
                            </div>
                            <div className="pricing-divider"></div>
                            <div className="pricing-max  pricing-item">
                                <span>$</span>
                                <input type='number' name="priceMax" id="priceMax" value={pricing.priceMax} onChange={changePricing} placeholder='100' />
                            </div>
                        </div>
                    </div>
                </Expand>

                <Expand title={"Category"}>
                    <div className="filter-by-category padding-block-100">
                        <div className="category-body padding-block-50">
                            {categories.map(item => <div key={item}>
                                <label htmlFor={item} className="category-item">
                                    <input type="radio" name="category" id={item} value={item} onChange={selectionChange} />
                                    {item}
                                </label>
                            </div>)}
                        </div>

                    </div>
                </Expand>

                <Expand title={"Brands"}>
                    <div className="filter-by-brand padding-block-50">
                        <div className="brands-body padding-block-50">
                            {brands.map(item => <div key={item}>
                                <label htmlFor={item} className="category-item">
                                    <input type="radio" name="brand" id={item} value={item} onChange={selectionChange} />
                                    {item}
                                </label>
                            </div>)}
                        </div>

                    </div>
                </Expand>
            </div>
        </div>
    )
}
