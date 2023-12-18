import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import "components/shared/header/styles/favorites.css"
import Favorites from './Favorites'
import { useLocation } from 'react-router-dom'
import Context from 'context'


export default function FavoriteButton() {
    const [activeFavorites, setActiveFavorites] = useState(false);

    const value = useContext(Context)
    let { state: { favorites } } = value;

    let { pathname } = useLocation();

    function handleFavorites() {
        setActiveFavorites(!activeFavorites)
    }

    useEffect(() => {
        setActiveFavorites(false)
    }, [pathname])


    return (
        <>
            <div
                className={`favorite-button ${activeFavorites ? "active" : ""}`}
                onClick={handleFavorites}>
                <AiOutlineHeart />
                {favorites.length > 0 && <div className='notification-badge'>
                    <span>{favorites.length}</span>
                </div>}
            </div>
            <Favorites active={activeFavorites} setActiveFavorites={setActiveFavorites} />
            <div
                className={`overlay ${activeFavorites ? "active" : ""}`}
                onClick={handleFavorites}>
            </div>
        </>
    )
}
