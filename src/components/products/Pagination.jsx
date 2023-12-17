import React from 'react'
import "components/products/styles/pagination.css"
import { FaLessThan, FaGreaterThan } from "react-icons/fa6"
import scrollToTop from 'utils/SCROLLT0TOP';

export default function Pagination({ totalPost, postsPerPage, currentPage, setSearchParams }) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pages.push(i)
    }

    function handleCurrentPage(page) {
        if (typeof page === 'number') {
            setSearchParams(prev => {
                prev.set("page", page)
                return prev;
            }, { replace: true })
        } else {
            if (page === "increase") {
                if (currentPage < pages.length) setSearchParams(prev => {
                    prev.set("page", currentPage + 1)
                    return prev
                }, { replace: true })


            } else {
                if (currentPage > 1) setSearchParams(prev => {
                    prev.set("page", currentPage - 1)
                    return prev
                }, { replace: true })
            }
        }
        scrollToTop();
    }


    return (
        <div className='pagination-wrapper margin-block-500'>
            <div className="pagination">
                <button
                    className='pagination__btn border'
                    onClick={() => handleCurrentPage("reduce")}
                ><FaLessThan />
                </button>
                {pages.map(item => (
                    <button
                        key={item}
                        className={`pagination__btn fs-200 ${currentPage === item ? "active" : ""}`}
                        onClick={() => handleCurrentPage(item)}
                    >
                        {item}
                    </button>))}
                <button className='pagination__btn border'
                    onClick={() => handleCurrentPage("increase")}
                >
                    <FaGreaterThan />
                </button>
            </div>
        </div>
    )
}
