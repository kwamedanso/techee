import React, { useState, useContext } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import Context from 'context';


export default function AddFavorite({ card, id }) {
    const [activeFav, setActiveFav] = useState(false);

    let value = useContext(Context)
    let { state: { favorites }, actions: { setFavorites, setToastNotification } } = value;


    function handleToastNotification() {
        setTimeout(() => {
            setToastNotification(false)
        }, 2000)
    }

    function handleFavorite(productId) {
        setActiveFav(!activeFav)
        const elementExists = favorites.includes(productId);
        if (!elementExists) {
            setFavorites((prevItems => [...prevItems, productId]))
            setToastNotification(true)
            handleToastNotification()
        } else {
            let newFavs = favorites.filter(item => id !== item)
            setFavorites([...newFavs])
        }
    }

    return (
        <>
            <div className={`product-favourite-button ${card ? "card" : null}`}>
                <AiOutlineHeart
                    style={{ color: `${favorites.includes(id) ? "red" : "black"}` }}
                    onClick={() => handleFavorite(id)}
                />
            </div>
        </>
    )
}
