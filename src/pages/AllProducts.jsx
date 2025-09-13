import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AvailableProducts from 'components/shared/AvailableProducts'
import Pagination from 'components/products/Pagination'
import ScrollToTop from 'components/shared/ScrollToTop'
import SearchAndFilter from 'components/products/SearchAndFilter'
import "components/products/styles/allProducts.css"
import AllFilters from 'components/products/AllFilters'
import Loader from 'components/shared/Loader'
import { RxCross2 } from "react-icons/rx";

export default function AllProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(null);


    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/allProducts.json");
                if (!response.ok) {
                    throw new Error("Unable to fetch products");
                }
                const data = await response.json()
                setAllProducts(data)
            } catch (error) {

            }
        }
        fetchProducts();
    }, [])



    const search = searchParams.get("search")?.toLocaleLowerCase() || "";
    const page = Number(searchParams.get("page")) || 1
    const brand = searchParams.get("brand")?.toLocaleLowerCase() || "";
    const category = searchParams.get("category")?.toLocaleLowerCase() || "";
    const minPrice = Number(searchParams.get("minPrice")) || 0
    const maxPrice = Number(searchParams.get("maxPrice")) || Infinity


    const postsPerPage = 15;
    const totalPost = filteredProducts?.length;

    const lastPost = postsPerPage * Number(page);
    const firstPost = lastPost - postsPerPage;



    useEffect(() => {
        const newFilteredProducts = allProducts?.filter((product) => {
            const matchesSearch = search === "" || product?.brand.toLowerCase().includes(search) || product?.category.toLowerCase().includes(search) || product?.model.toLowerCase().includes(search);

            const matchesBrand = brand === "" || product.brand.toLowerCase() === brand;

            const matchesCategory = category === "" || product.category.toLowerCase() === category;

            const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

            return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
        })

        console.log(newFilteredProducts)
        setFilteredProducts(newFilteredProducts)
    }, [searchParams, allProducts])



    // Function to reset currentPage to 1
    const resetPage = () => {
        setSearchParams(prev => {
            prev.set("page", 1)
            return prev;
        }, { replace: true })
    }

    // Function to delete the search from the url
    function resetSearch() {
        setSearchParams(prev => {
            prev.delete("search")
            return prev;
        }, { replace: true })
    }

    //Function to delete brand and category from the url
    function resetBrandandCategory() {
        setSearchParams(prev => {
            prev.delete("brand")
            prev.delete("category")
            return prev;
        }, { replace: true })
    }




    // GET THE USERS INPUT FROM THE SEARCHANDFILTER COMPONENT
    function getUserSearch(userSearch) {
        resetBrandandCategory()
        resetPage()
        setSearchParams(prev => {
            prev.set("search", userSearch)
            return prev
        }, { replace: true })
    }


    // GET BRAND SELECTION FROM THE INPUT
    function getBrandSelection(userSelection) {
        resetSearch();
        resetPage()
        setSearchParams(prev => {
            prev.set("brand", userSelection);
            return prev;
        }, { replace: true })
    }


    // GET CATEGORY SELECTION FROM THE INPUT
    function getCategorySelection(userSelection) {
        resetSearch()
        resetPage()
        setSearchParams(prev => {
            prev.set("category", userSelection);
            return prev;
        }, { replace: true })
    }


    function getPriceRange(min, max) {
        setSearchParams(prev => {
            prev.set("minPrice", min)
            prev.set("maxPrice", max)
            return prev
        }, { replace: true })
    }


    function clearBrandSelection() {
        setSearchParams(prev => {
            prev.delete("brand")
            return prev
        }, { replace: true })
    }

    function clearCategorySelection() {
        setSearchParams(prev => {
            prev.delete("category")
            return prev
        }, { replace: true })
    }

    return (
        <>
            <ScrollToTop />
            <div className='all-products-wrapper section-margin'>
                <SearchAndFilter getUserSearch={getUserSearch} getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} setFilteredProducts={setFilteredProducts} getPriceRange={getPriceRange} minPrice={minPrice} maxPrice={maxPrice} brand={brand} category={category} />


                <div className="all-products margin-block-100">
                    <div className="filter-desktop">
                        <AllFilters getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} getPriceRange={getPriceRange} minPrice={minPrice} maxPrice={maxPrice} brand={brand} category={category} />
                    </div>

                    <div className='padding-block-10'>
                        {!filteredProducts && <Loader />}
                        {filteredProducts?.length === 0 && <div><h1>No products meet the current filter</h1></div>}

                        {filteredProducts?.length > 0 && <>
                            {(category || brand) && <div className="current-filters_wrapper">
                                <>
                                    {category && <div className='current-filters_item'>
                                        <span><span className='op-200 fs-150'>Category</span>: {category}</span>
                                        <span><RxCross2 onClick={clearCategorySelection} /></span>
                                    </div>}

                                    {brand && <div className='current-filters_item'>
                                        <span><span className='op-200'>Brand</span>: {brand}</span>
                                        <span><RxCross2 onClick={clearBrandSelection} /></span>
                                    </div>}
                                </>

                            </div>}
                            <AvailableProducts availableProducts={filteredProducts?.slice(firstPost, lastPost)} />
                        </>}
                    </div>
                </div>

                {filteredProducts?.length > postsPerPage && <Pagination totalPost={totalPost} postsPerPage={postsPerPage} currentPage={page} setSearchParams={setSearchParams} />}
            </div>
        </>
    )
}
