import React, { useState, useEffect } from 'react'
import OurAdvantages from 'components/shared/OurAdvantages';
import Title from 'components/productDeatils/Title';
import Description from 'components/productDeatils/Description'
import Price from 'components/productDeatils/Price'
import SelectColor from 'components/productDeatils/SelectColor'
import SelectStorage from 'components/productDeatils/SelectStorage';
import ShowImage from 'components/productDeatils/ShowImage';
import { LiaShippingFastSolid } from "react-icons/lia"
import AvailableProducts from 'components/shared/AvailableProducts';
import ScrollToTop from 'components/shared/ScrollToTop';
import supabase from 'config/supabaseClient';
import AddToCart from 'components/productDeatils/AddToCart';

export default function Main({ productId }) {
    const [currentProduct, setCurrentProduct] = useState(null);
    const [sameCategory, setSameCategory] = useState(null);
    const [fetchError, setFetchError] = useState(null)
    const [currentImage, setCurrentImage] = useState(null)
    const [currentPrice, setCurrentPrice] = useState(null)
    const [variantInfo, setVariantInfo] = useState({ color: "", storage: "" })


    const fetchSameCategory = async (category) => {
        const { data, error } = await supabase
            .from("products")
            .select()
            .eq("category", `${category}`)
            .neq("id", productId)
            .range(0, 4)


        if (error) {
            setFetchError("Could not fetch the products")
            setSameCategory(null)
            console.log(error)
        } else {
            setSameCategory(data)
            setFetchError(null)
        }

    }


    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from("products")
                .select()
                .eq("id", `${productId}`)

            if (error) {
                setFetchError("Could not fetch the products")
                setCurrentProduct(null)
                console.log(error)

            } else {
                setCurrentProduct(data[0])
                setCurrentImage(data[0].images[0])
                setCurrentPrice(data[0].price)
                setFetchError(null)

                fetchSameCategory(data[0].category);
            }
        }

        fetchProduct();
        setVariantInfo({ color: "", storage: "" })
    }, [productId])


    function handleImageSetting(img) {
        setCurrentImage(img)
    }

    return (
        <div>
            <ScrollToTop />
            <div className='product-details-wrapper section-margin'>

                <Title id={currentProduct?.id} />

                <div className="details-content">

                    <ShowImage currentImage={currentImage} handleImageSetting={handleImageSetting} model={currentProduct?.model} colors={currentProduct?.colors} images={currentProduct?.images} />

                    <div className='details-content-desc'>
                        <Description
                            brand={currentProduct?.brand}
                            model={currentProduct?.model}
                            description={currentProduct?.description}
                            starRating={currentProduct?.starRating}
                        />

                        <Price price={currentPrice} />

                        <SelectColor
                            setCurrentImage={setCurrentImage}
                            colors={currentProduct?.colors}
                            handleImageSetting={handleImageSetting}
                            images={currentProduct?.images}
                            variantInfo={variantInfo}
                            setVariantInfo={setVariantInfo}
                        />

                        <SelectStorage
                            storage={currentProduct?.storage}
                            currentPrice={currentPrice}
                            setcurrentPrice={setCurrentPrice}
                            price={currentProduct?.price}
                            variantInfo={variantInfo}
                            setVariantInfo={setVariantInfo}
                        />

                        <AddToCart id={currentProduct?.id} varianInfo={variantInfo} setVariantInfo={setVariantInfo} />

                        <div className='padding-block-100'>
                            <p className='free-delivery fs-200'><LiaShippingFastSolid /> Free delievery on orders over $300</p>
                        </div>
                    </div>
                </div>

                <br />
                <OurAdvantages />
                {sameCategory?.length > 0 && <div className='margin-block-400'>
                    <p className='fs-500 fw-semi-bold margin-block-100'>Similar Products</p>
                    <AvailableProducts category availableProducts={sameCategory} />
                </div>}
            </div >
        </div>
    )
}
