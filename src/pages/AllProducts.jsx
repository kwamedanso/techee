import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import AvailableProducts from 'components/shared/AvailableProducts'
import Pagination from 'components/products/Pagination'
import ScrollToTop from 'components/shared/ScrollToTop'
import useFetch from 'hooks/useFetch'
import SearchAndFilter from 'components/products/SearchAndFilter'
import "components/products/styles/allProducts.css"
import AllFilters from 'components/products/AllFilters'

export default function AllProducts() {
    // let initialFilters = { brand: [], category: [], price: "", storage: [] }
    const [searchBox, setSearchBox] = useSearchParams({ search: "" });
    const [currentPage, setCurrentPage] = useSearchParams({ page: 1 })
    const [filteredProducts, setFilteredProducts] = useState([])
    const [selectedBrand, setSelectedBrand] = useSearchParams({ brand: "" })
    const [selectedCategory, setSelectedCategory] = useSearchParams({ category: "" })


    const url = "https://kwamedanso.github.io/productsDataAPI/techee.json"
    const { loading, data } = useFetch(url)

    const search = searchBox.get("search");
    const page = Number(currentPage.get("page"))
    const brand = selectedBrand.get("brand")
    const category = selectedCategory.get("category")


    const postsPerPage = 15;
    const totalPost = filteredProducts?.length;

    const lastPost = postsPerPage * Number(page);
    const firstPost = lastPost - postsPerPage;


    // Setting the json data
    useEffect(() => {
        if (!loading) {
            setFilteredProducts(data)
        } else {
            setFilteredProducts([])
        }
    }, [data, loading])


    // Filter user selection from the radio buttons
    function userselectionFilter(selection, filterBy) {
        let products = data?.filter(product => product[filterBy].toLowerCase() === selection.toLowerCase())
        setFilteredProducts(products)
        resetPage()
    }


    useEffect(() => {
        if (brand.length === 0 && category.length !== 0) {
            let products = data?.filter(product => product.category.toLowerCase() === category.toLowerCase());
            //filter prices
            setFilteredProducts(products)
            // console.log("only category:", products)
        } else if (brand.length !== 0 && category.length === 0) {
            let products = data?.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
            // filter prices
            setFilteredProducts(products)
            // console.log("only brand:", products)
        } else if (brand.length === 0 && category.length === 0) {
            let products = data?.filter(product => product.price > 0);
            //filter prices
            setFilteredProducts(products)
            // console.log("nothing:", products)
        } else {
            let products = data?.filter(product => product.category.toLowerCase() === category.toLowerCase() && product.brand.toLowerCase() === brand.toLowerCase());
            //filter prices
            setFilteredProducts(products)
            // console.log("both:", products)
        }
    }, [data, category, brand])



    // Function to reset currentPage to 1
    const resetPage = () => {
        setCurrentPage(prev => {
            prev.set("page", 1)
            return prev;
        }, { replace: true })
    }


    // SEARCH BOX FILTER
    function searchFilter() {
        let products = data?.filter(product => product.brand.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.model.toLowerCase().includes(search.toLowerCase()));

        setFilteredProducts(products);
    }
    // useEffect(() => {
    //     let products = data?.filter(product => product.brand.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.model.toLowerCase().includes(search.toLowerCase()));

    //     setFilteredProducts(products);
    //     // resetPage()
    // }, [search, data])



    // GET THE USERS INPUT FROM THE SEARCHANDFILTER COMPONENT
    function getUserSearch(userSearch) {
        setSearchBox(prev => {
            prev.set("search", userSearch)
            return prev
        }, { replace: true })
    }


    // GET BRAND SELECTION FROM THE INPUT
    function getBrandSelection(userSelection) {
        setSelectedBrand(prev => {
            prev.set("brand", userSelection);
            return prev;
        }, { replace: true })
    }

    // GET CATEGORY SELECTION FROM THE INPUT
    function getCategorySelection(userSelection) {
        setSelectedCategory(prev => {
            prev.set("category", userSelection);
            return prev;
        }, { replace: true })
    }



    return (
        <>
            <ScrollToTop />
            <div className='all-products-wrapper section-margin'>
                <SearchAndFilter getUserSearch={getUserSearch} userselectionFilter={userselectionFilter} resetPage={resetPage} getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} setFilteredProducts={setFilteredProducts} searchFilter={searchFilter} />



                <div className="all-products margin-block-100">
                    <div className="filter-desktop">
                        <AllFilters userselectionFilter={userselectionFilter} getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} />
                    </div>

                    <div className='padding-block-100'>
                        <AvailableProducts availableProducts={filteredProducts?.slice(firstPost, lastPost)} />
                    </div>
                </div>

                {filteredProducts?.length > postsPerPage && <Pagination totalPost={totalPost} postsPerPage={postsPerPage} currentPage={page} setCurrentPage={setCurrentPage} />}
            </div>
        </>
    )
}
