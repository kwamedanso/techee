import React, { useContext, useEffect, useState } from 'react'
import "components/shared/header/styles/favorites.css"
import Context from 'context'
import ToastNotification from './ToastNotification';
import { BiCartAdd } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { RxCross2, RxCrossCircled } from "react-icons/rx"
import supabase from 'config/supabaseClient';


export default function Favorites({ active, setActiveFavorites }) {
    const [allProducts, setAllProducts] = useState(null)
    const [fetchError, setFetchError] = useState(null)
    let value = useContext(Context);
    let { state: { favorites, toastNotification }, actions: { setFavorites } } = value;



    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from("products")
                .select()
                .in("id", [...favorites])

            if (error) {
                console.log("Could not fetch products")
                setAllProducts(null)
                setFetchError(error)
            } else {
                setAllProducts(data)
                setFetchError(null)
            }
        }

        fetchData()
    }, [favorites])


    function removeFromFav(itemId) {
        let newFavs = favorites.filter(item => item !== itemId)
        setFavorites([...newFavs])
    }

    function closeFavs() {
        setActiveFavorites(false)
    }

    function clearAllFavs() {
        setFavorites([])
        // setActiveFavorites(false)
    }


    return (
        <>
            <div className={`favorites ${active ? "active" : ""}`}>
                <div>
                    <div className="fav-title">
                        <p className='fs-300 fw-bold'>Favorites</p>
                        <p onClick={closeFavs}><RxCrossCircled /></p>
                    </div>
                    {favorites.length === 0 ? (
                        <div className='favorites-empty'>
                            <p className='margin-block-100'>Fav's feeling empty, ready for your picks! Fill it up with all your faves now!</p>
                        </div>) : (
                        <div className='favorites-active'>
                            {allProducts.map(favItem => (
                                <div key={favItem.id} className='favorites-item'>
                                    <div className="fav-item-image-wrapper">
                                        <Link to={`/productDetails/${favItem.id}`} >
                                            <img src={favItem.images[0]} alt={favItem.model} />
                                        </Link>
                                    </div>

                                    <div className="fav-item-desc">
                                        <Link to={`/productDetails/${favItem.id}`}
                                            title='View product details'
                                            className='fs-200 fw-semi-bold'>
                                            {favItem.brand} {favItem.model}
                                        </Link>
                                        <p className='star-rating margin-block-10'>
                                            <BsStarFill />{favItem.starRating}
                                        </p>
                                        <p>${favItem.price}</p>
                                    </div>

                                    <div className="fav-item-button">
                                        <button title='Add to cart' data-type="bg-blue">
                                            <BiCartAdd />
                                        </button>
                                        <button
                                            data-type="white"
                                            onClick={() => removeFromFav(favItem.id)}>
                                            <RxCross2 />
                                        </button>
                                    </div>
                                </div>))}

                            <div className="clear-all-favs-wrapper">
                                <button onClick={clearAllFavs}>Clear All</button>
                            </div>
                        </div>)}
                </div>
            </div>
            <ToastNotification active={toastNotification} />
        </>
    )
}
