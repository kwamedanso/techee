import React, { useState, useEffect } from 'react'
import { LuSettings2 } from "react-icons/lu"
import "components/products/styles/searchAndFilter.css"
import AllFilters from './AllFilters';


export default function SearchAndFilter({ getUserSearch, userselectionFilter, resetPage, getBrandSelection, getCategorySelection, searchFilter }) {
    const [search, setSearch] = useState("");
    const [filterEnabled, setFilterEnabled] = useState(false);


    // useEffect(() => {
    //     getUserSearch(search)
    // }, [search])


    function handleSearchBox(e) {
        e.preventDefault()
        searchFilter();
    }


    function handleKeydown(e) {
        if (e.keyCode === 13 || e.key === "Enter") {
            e.preventDefault();
            // getUserSearch(search)
            searchFilter()
            // resetPage()
        }
    }

    function handleFilterButton() {
        setFilterEnabled(!filterEnabled)
    }




    return (
        <>
            <div className="search-and-filter">
                <form onSubmit={handleSearchBox}>
                    <input id='search-box' type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Products...' onKeyDown={handleKeydown} />
                    <button type='submit' className='submit-btn' data-type="bg-blue">Search</button>
                </form>
                <div className="filter-button" >
                    <button data-type="bg-blue" onClick={handleFilterButton}><LuSettings2 /></button>
                </div>
            </div>

            <div className={`${filterEnabled ? "filter-overlay" : ""}`} onClick={handleFilterButton}></div>

            {filterEnabled && <div className='filter-mobile'>
                <AllFilters active={filterEnabled} setFilterEnabled={setFilterEnabled} handleFilterButton={handleFilterButton} userselectionFilter={userselectionFilter} getBrandSelection={getBrandSelection} getCategorySelection={getCategorySelection} />
            </div>}


        </>
    )
}
