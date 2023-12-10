import React, { useState, useEffect } from 'react'
import OurAdvantages from 'components/shared/OurAdvantages';
import Title from 'components/productDeatils/Title';
import Description from 'components/productDeatils/Description'
import Price from 'components/productDeatils/Price'
import SelectColor from 'components/productDeatils/SelectColor'
import SelectStorage from 'components/productDeatils/SelectStorage';
import CartCheckout from 'components/productDeatils/CartCheckout';
import ShowImage from 'components/productDeatils/ShowImage';
import { LiaShippingFastSolid } from "react-icons/lia"
import AvailableProducts from 'components/shared/AvailableProducts';
import { useLocation } from 'react-router-dom';
import ScrollToTop from 'components/shared/ScrollToTop';

export default function Main({ data, sameCategory }) {
    let { id, brand, price, description, model, starRating, storage, colors } = data;

    const [currentImage, setCurrentImage] = useState(Object.values(colors.at(0))[0]);
    const [currentPrice, setcurrentPrice] = useState(price)
    const { pathname } = useLocation();

    useEffect(() => {
        setCurrentImage(Object.values(colors.at(0))[0])
    }, [pathname, colors])

    function handleImageSetting(img) {
        setCurrentImage(img)
    }

    return (
        <div>
            <ScrollToTop />
            <div className='product-details-wrapper section-margin'>

                <Title id={id} />

                <div className="details-content">

                    <ShowImage currentImage={currentImage} handleImageSetting={handleImageSetting} model={model} colors={colors} />

                    <div className='details-content-desc'>
                        <Description
                            brand={brand}
                            model={model}
                            description={description}
                            starRating={starRating}
                        />

                        <Price price={currentPrice} />


                        <SelectColor
                            setCurrentImage={setCurrentImage}
                            colors={colors}
                            handleImageSetting={handleImageSetting}
                        />

                        <SelectStorage storage={storage} currentPrice={currentPrice} setcurrentPrice={setcurrentPrice} price={price} />

                        <CartCheckout id={id} />

                        <div className='padding-block-100'>
                            <p className='free-delivery fs-200'><LiaShippingFastSolid /> Free delievery on orders over $300</p>
                        </div>
                    </div>
                </div>

                <br />
                <OurAdvantages />
                {sameCategory.length > 0 && <div className='margin-block-400'>
                    <p className='fs-500 fw-semi-bold margin-block-100'>Similar Products</p>
                    <AvailableProducts category availableProducts={sameCategory} />
                </div>}
            </div >
        </div>
    )
}
