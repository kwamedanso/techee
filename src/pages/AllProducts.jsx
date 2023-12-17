import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AvailableProducts from 'components/shared/AvailableProducts'
import Pagination from 'components/products/Pagination'
import ScrollToTop from 'components/shared/ScrollToTop'
import SearchAndFilter from 'components/products/SearchAndFilter'
import "components/products/styles/allProducts.css"
import AllFilters from 'components/products/AllFilters'
import supabase from 'config/supabaseClient'
import Loader from 'components/shared/Loader'

export default function AllProducts() {
    const [allProducts, setAllProducts] = useState(null)
    // const [fetchError, setFetchError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(null);



    const search = searchParams.get("search")
    const page = Number(searchParams.get("page")) || 1
    const brand = searchParams.get("brand")
    const category = searchParams.get("category")


    const postsPerPage = 15;
    const totalPost = filteredProducts?.length;

    const lastPost = postsPerPage * Number(page);
    const firstPost = lastPost - postsPerPage;

    // Fetch products from supabase
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("products")
                .select()

            if (error) {
                console.log(error)
                // setFetchError("Sorry an error occurred white fetching data")
                setAllProducts(null)
            } else {
                setAllProducts(data)
                // setFetchError(null)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        if (search) {
            // searchFilter(allProducts)
            let products = allProducts?.filter(product => product?.brand.toLowerCase().includes(search.toLowerCase()) || product?.category.toLowerCase().includes(search.toLowerCase()) || product?.model.toLowerCase().includes(search.toLowerCase()));
            setFilteredProducts(products);

        } else if (brand && !category) {
            // brandFilter(allProducts)
            let products = allProducts?.filter(product => product?.brand.toLowerCase() === brand.toLowerCase())
            setFilteredProducts(products)

        } else if (category && !brand) {
            // categoryFilter(allProducts)
            let products = allProducts?.filter(product => product?.category.toLowerCase() === category.toLowerCase())
            setFilteredProducts(products)

        } else if (category && brand) {
            // bothFilter(allProducts)
            let products = allProducts?.filter(product => product?.brand.toLowerCase() === brand.toLowerCase() && product?.category.toLowerCase() === category.toLowerCase());
            setFilteredProducts(products)

        } else {
            setFilteredProducts(allProducts)
        }
    }, [search, brand, category, allProducts])




    function searchFilter(data) {
        let products = data?.filter(product => product?.brand.toLowerCase().includes(search.toLowerCase()) || product?.category.toLowerCase().includes(search.toLowerCase()) || product?.model.toLowerCase().includes(search.toLowerCase()));
        setFilteredProducts(products);
    }

    // function brandFilter(data) {
    //     let products = data?.filter(product => product?.brand.toLowerCase() === brand.toLowerCase())
    //     setFilteredProducts(products)
    // }

    // function categoryFilter(data) {
    //     let products = data?.filter(product => product?.category.toLowerCase() === category.toLowerCase())
    //     setFilteredProducts(products)
    // }

    // function bothFilter(data) {
    //     let products = data?.filter(product => product?.brand.toLowerCase() === brand.toLowerCase() && product?.category.toLowerCase() === category.toLowerCase());
    //     setFilteredProducts(products)
    // }












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
        // searchFilter(allProducts)
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


    return (
        <>
            <ScrollToTop />
            <div className='all-products-wrapper section-margin'>
                <SearchAndFilter getUserSearch={getUserSearch} searchFilter={searchFilter} getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} setFilteredProducts={setFilteredProducts} />


                <div className="all-products margin-block-100">
                    <div className="filter-desktop">
                        <AllFilters getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} />
                    </div>

                    <div className='padding-block-100'>
                        {!filteredProducts && <Loader />}
                        {filteredProducts?.length === 0 && <div><h1>No products meet the current filter</h1></div>}

                        {filteredProducts?.length > 0 && <AvailableProducts
                            availableProducts={filteredProducts?.slice(firstPost, lastPost)}
                        />}
                    </div>
                </div>

                {filteredProducts?.length > postsPerPage && <Pagination totalPost={totalPost} postsPerPage={postsPerPage} currentPage={page} setSearchParams={setSearchParams} />}
            </div>
        </>
    )
}
