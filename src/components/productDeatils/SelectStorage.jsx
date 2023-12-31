import React, { useState } from 'react'

export default function SelectStorage({ storage, setcurrentPrice, price, variantInfo, setVariantInfo }) {
    const [currentStorage, setcurrentStorage] = useState(storage && Object.keys(storage.at(0))[0]);


    function handleStorageSetting(size) {
        setcurrentStorage(Object.keys(size)[0])
        let addtion = Object.values(size)[0]
        setcurrentPrice(price + addtion)
        setVariantInfo({ ...variantInfo, storage: Object.keys(size)[0] })
    }


    return (
        <>
            <div className='padding-block-100'>
                <p className='fw-semi-bold fs-300'>Choose preferred storage</p>
                <div className='padding-block-50'>
                    {storage?.map(size => (
                        <button key={Object.keys(size)}
                            className='storage-button'
                            data-type={`${variantInfo.storage === Object.keys(size)[0] ? "bg-blue" : "bg-white"}`}
                            onClick={() => handleStorageSetting(size)}
                        >
                            <span>{Object.keys(size)} GB</span>
                        </button>
                    ))}
                </div>
            </div><hr />
        </>
    )
}
