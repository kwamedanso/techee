import React, { useContext } from 'react'
import "components/shared/header/styles/favorites.css"
import Context from 'context'
import productsData from 'const/productsData'
import ToastNotification from './ToastNotification';
import { BiCartAdd } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { RxCross2, RxCrossCircled } from "react-icons/rx"


export default function Favorites({ active, setActiveFavorites }) {
    let value = useContext(Context);
    let { state: { favorites, toastNotification }, actions: { setFavorites } } = value;

    let favoritesContainer = [];
    for (let i = 0; i < favorites.length; i++) {
        let newItem = productsData.find(item => item.id === favorites[i]);
        favoritesContainer.push(newItem)
    }

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
                    {favorites.length === 0 ? (
                        <div className='favorites-empty'>
                            <div className="fav-title">
                                <p className='fs-300 fw-bold'>Favorites</p>
                                <p onClick={closeFavs}><RxCross2 /></p>
                            </div>

                            <p className='margin-block-100'>Fav's feeling empty, ready for your picks! Fill it up with all your faves now!</p>
                        </div>) : (
                        <div className='favorites-active'>
                            <div className="fav-title">
                                <p className='fs-300 fw-bold'>Favorites</p>
                                <p onClick={closeFavs}><RxCrossCircled /></p>
                            </div>
                            {favoritesContainer.map(favItem => (
                                <div key={favItem.id} className='favorites-item'>
                                    <div className="fav-item-image-wrapper">
                                        <Link to={`/productDetails/${favItem.id}`} >
                                            <img src={Object.values(favItem.colors[0])[0]} alt={favItem.model} />
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
