import React, { useEffect, useState, Suspense, lazy } from 'react'
import "components/home/styles/category.css"
// import "components/shared/styles/productCard.css"
import useFetch from 'hooks/useFetch'
import Loader from 'components/shared/Loader'
const AvailableProducts = lazy(() => import("components/shared/AvailableProducts"))


const categoryButtons = ["All", "Laptops", "Phones", "Headsets", "Others"]
export default function Category() {
    const url = "https://kwamedanso.github.io/productsDataAPI/techee.json";
    const { data } = useFetch(url);

    const [activeTab, setActiveTab] = useState("All");
    const [filteredProducts, setfilteredProducts] = useState([])


    useEffect(() => {
        if (activeTab === 'All') {
            setfilteredProducts(data)
        } else if (activeTab === "Others") {
            let products = data?.filter((product) => product.category !== "Headsets" && product.category !== "Phones" && product.category !== "Laptops");
            setfilteredProducts([...products])
        }
        else {
            let products = data?.filter((product) => product.category === activeTab);
            setfilteredProducts([...products])
        }
    }, [activeTab, data])

    function handleActiveTab(btn) {
        setActiveTab(btn)
    }

    return (
        <>
            <div className="category-wrapper padding-block-600 section-margin">
                <div className="category-buttons">
                    {categoryButtons.map(btn => <button
                        key={btn}
                        className={`fs-200 ${activeTab === btn ? "active-tab" : ""}`}
                        onClick={() => handleActiveTab(btn)}
                    >{btn}</button>)}
                </div>


                <Suspense fallback={<Loader />}>
                    <AvailableProducts availableProducts={filteredProducts?.slice(0, 10)} />
                </Suspense>
            </div>
        </>
    )
}
