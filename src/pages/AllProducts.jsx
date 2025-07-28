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
import useFetch from 'hooks/useFetch'

export default function AllProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(null);

    let allProducts = null;

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("/allProducts.json");
                if (!response.ok) {
                    throw new Error("Unable to fetch products");
                }
                const data = await response.json()
                allProducts = data;
                setFilteredProducts(data)
            } catch (error) {

            }
        }
        fetchProducts();
    }, [allProducts])
    console.log(allProducts)



    const search = searchParams.get("search")
    const page = Number(searchParams.get("page")) || 1
    const brand = searchParams.get("brand")
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice") || ""
    const maxPrice = searchParams.get("maxPrice") || ""


    const postsPerPage = 15;
    const totalPost = filteredProducts?.length;

    const lastPost = postsPerPage * Number(page);
    const firstPost = lastPost - postsPerPage;



    useEffect(() => {
        if (search) {
            let products = allProducts?.filter(product => product?.brand.toLowerCase().includes(search.toLowerCase()) || product?.category.toLowerCase().includes(search.toLowerCase()) || product?.model.toLowerCase().includes(search.toLowerCase()));
            let finalProducts = priceFilter(products)
            setFilteredProducts(finalProducts);
        } else if (brand && !category) {
            let products = allProducts?.filter(product => product?.brand.toLowerCase() === brand.toLowerCase())
            let finalProducts = priceFilter(products)
            setFilteredProducts(finalProducts);
        } else if (category && !brand) {
            let products = allProducts?.filter(product => product?.category.toLowerCase() === category.toLowerCase())
            let finalProducts = priceFilter(products)
            setFilteredProducts(finalProducts);
        } else if (category && brand) {
            let products = allProducts?.filter(product => product?.brand.toLowerCase() === brand.toLowerCase() && product?.category.toLowerCase() === category.toLowerCase());
            let finalProducts = priceFilter(products)
            setFilteredProducts(finalProducts);
        }
        else {
            const finalProducts = priceFilter(allProducts)
            setFilteredProducts(finalProducts)
        }
    }, [search, brand, category, allProducts, minPrice, maxPrice])



    function priceFilter(arr) {
        if (minPrice && !maxPrice) {
            return arr?.filter(product => product.price > Number(minPrice))
        } else if (!minPrice && maxPrice) {
            return arr?.filter(product => product.price < Number(maxPrice))
        } else if (minPrice && maxPrice) {
            if (Number(minPrice) > Number(maxPrice)) {
                return []
            } else {
                return arr?.filter(product => product.price > Number(minPrice) && product.price < Number(maxPrice))
            }
        } else {
            return arr
        }
    }


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
