import React, { useState, useEffect } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import "components/shared/header/styles/favorites.css"
import Favorites from './Favorites'
import { useLocation } from 'react-router-dom'


export default function FavoriteButton() {
    const [activeFavorites, setActiveFavorites] = useState(false);
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
            </div>
            <Favorites active={activeFavorites} setActiveFavorites={setActiveFavorites} />
            <div
                className={`overlay ${activeFavorites ? "active" : ""}`}
                onClick={handleFavorites}>
            </div>
        </>
    )
}
