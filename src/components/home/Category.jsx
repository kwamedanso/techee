import React, { useEffect, useState } from 'react'
import "components/home/styles/category.css"
import Loader from 'components/shared/Loader'
import AvailableProducts from 'components/shared/AvailableProducts'


const categoryButtons = ["All", "Laptops", "Phones", "Headsets", "Others"]
export default function Category() {
    const [allProducts, setAllProducts] = useState(null)
    const [activeTab, setActiveTab] = useState("All");
    const [filteredProducts, setfilteredProducts] = useState(null)
    const [fetchError, setFetchError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch("/allProducts.json")
                if (!response.ok) {
                    setFetchError("Could not fetch the products")
                    setAllProducts(null)
                    throw new Error("Unable to fetch products.")
                }
                const data = await response.json();
                setAllProducts(data);
                setfilteredProducts(data)
                setFetchError(null);
                // console.log(data);
            } catch (error) {
                console.log(error)
            }

            // if (error) {
            //     setFetchError("Could not get the products")
            //     setAllProducts(null)
            //     console.log(error)
            // } else {
            //     setAllProducts(data)
            //     setfilteredProducts(data)
            //     setFetchError(null)
            // }
        }

        fetchData()

    }, [])



    function handleActiveTab(btn) {
        setActiveTab(btn)
        if (btn === 'All') {
            setfilteredProducts(allProducts)
        } else if (btn === "Others") {
            let products = allProducts?.filter((product) => product.category !== "Headsets" && product.category !== "Phones" && product.category !== "Laptops");
            setfilteredProducts([...products])
        }
        else {
            let products = allProducts?.filter((product) => product.category === btn);
            setfilteredProducts([...products])
        }
    }

    return (
        <>
            <div className="category-wrapper padding-block-600 section-margin">
                {allProducts !== null && <div className="category-buttons">
                    {categoryButtons.map(btn => <button
                        data-type='bg-white'
                        key={btn}
                        className={`fs-200 ${activeTab === btn ? "active-tab" : ""}`}
                        onClick={() => handleActiveTab(btn)}
                    >{btn}</button>)}
                </div>}

                {allProducts && <AvailableProducts availableProducts={filteredProducts?.slice(0, 10)} />}
                {allProducts === null && <Loader />}

            </div>
        </>
    )
}
