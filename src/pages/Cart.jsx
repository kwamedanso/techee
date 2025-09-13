import React, { useContext, useState, useEffect } from 'react'
import Context from 'context';
import "components/cart/cart.css"
import CartItems from 'components/cart/CartItems';
import CartSubtotal from 'components/cart/CartSubtotal';
import Loader from 'components/shared/Loader';
import ScrollToTop from 'components/shared/ScrollToTop';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';




export default function Cart() {
    const [allProducts, setAllProducts] = useState(null)
    let value = useContext(Context)
    let { state: { cartVariants }, actions: { setCartVariants } } = value;

    useEffect(() => {
        let cartProductIds = []
        for (let i = 0; i < cartVariants.length; i++) {
            cartProductIds.push(cartVariants[i].id)
        }
        // console.log(cartProductIds)
        async function fetchCartProducts() {
            try {
                const response = await fetch("/allProducts.json");
                if (!response.ok) {
                    console.log("Unable to fetch fetch the cart items.")
                }
                const data = await response.json();
                let cartProductList = data.filter((product) => cartProductIds.includes(product.id))
                setAllProducts(cartProductList)
            } catch (error) {
                console.log(error.message)
            }
        }

        // console.log(cartVariants)
        fetchCartProducts();
    }, [cartVariants])

    // useEffect(() => {
    //     let cartProductIds = []
    //     for (let i = 0; i < cartVariants.length; i++) {
    //         cartProductIds.push(cartVariants[i].id)
    //     }
    //     const fetchData = async () => {
    //         //Fetch all items available in the cart IDs.
    //         const { data, error } = useFetch();

    //         if (error) {
    //             console.log("Could not fetch data")

    //             setFetchError(error)
    //             setAllProducts(null)
    //         } else {
    //             setFetchError(null)
    //             setAllProducts(data)
    //         }
    //     }

    //     fetchData();
    // }, [cartVariants])


    function removeFromCart(id) {
        setCartVariants(prev => prev.filter(item => item.id !== id))
    }

    return (
        <>
            <ScrollToTop />
            <div className="section-margin">
                {allProducts?.length > 0 && <p className='fs-500 fw-semi-bold margin-block-100'>Shopping Cart</p>}
                {cartVariants.length === 0 ? <>
                    <div className='empty-cart'>
                        <div>
                            <div className='margin-block-100'>
                                <h2>SHOPPING CART</h2>
                                <p>Home \ Shopping Cart</p>
                            </div>
                            <div className=''>
                                <GiShoppingCart />
                            </div>
                            <p className='fs-600 fw-bold margin-block-400'>Your Cart Is Currently Empty!</p>
                            <p>Before your proceed to checkout your must first add some products to your shopping cart.</p>
                            <p className='margin-block-50'>You will find a lot of interesting products in our "Products" page.</p>

                            <div className='margin-block-600'>
                                <Link to={"/products"} className='button' data-type='bg-blue'>All Aroducts</Link>
                            </div>
                        </div>
                    </div>
                </> : allProducts !== null ? <div className='cart-page'>
                    <>
                        <CartItems allProducts={allProducts} cartVariants={cartVariants} setCartVariants={setCartVariants} removeFromCart={removeFromCart} />
                        <CartSubtotal cartVariants={cartVariants} allProducts={allProducts} />
                    </>
                </div> : <Loader />}
            </div>
        </>

    )
}
