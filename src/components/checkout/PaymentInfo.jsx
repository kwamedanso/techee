import React, { useContext, useState } from 'react'
import { LuPencilLine } from "react-icons/lu";
import { LiaCcVisa } from "react-icons/lia";
import { FaCcPaypal, FaCcMastercard, FaCcApplePay } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Context from 'context';


export default function PaymentInfo() {
    let value = useContext(Context)
    let { actions: { setCartVariants } } = value
    const [userInfo, setUserInfo] = useState({ name: "", cardNumber: "", expiry: "", cvv: "" })


    const navigate = useNavigate()

    function updateInfo(e) {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value })
    }

    function checkout(e) {
        // e.preventDefault();
        setCartVariants([])
        navigate("/success")
    }


    return (
        <>
            <div className='checkout-payment'>
                <form onSubmit={checkout}>
                    <div className='shipping-info'>
                        <div className=''>
                            <p className='fs-250 fw-semi-bold'>Shipping Information</p>
                            <p className='fs-150'>Change Address <LuPencilLine /></p>
                        </div>
                        <>
                            <p style={{ marginTop: "10px" }} className='op-200 fs-150'>Mirpur-10, Road 14A</p>
                            <p className='op-200 fs-150'>London, UK</p>
                            <p className='op-200 fs-150'>01758187028</p>
                        </>
                    </div>

                    <div className='payment-card margin-block-200'>
                        <p className='fs-250 fw-semi-bold'>Select Your Payment</p>
                        <div className='flex' style={{ gap: ".4rem", marginTop: "10px" }}>
                            <input type="radio" name="payment-method" id="card-payment" required />
                            <label htmlFor="card-payment" className='card-payment_icons'>
                                <LiaCcVisa /> <FaCcPaypal /> <FaCcMastercard /> <FaCcApplePay />
                            </label>
                        </div>
                        <div className='flex' style={{ gap: ".4rem", marginTop: "10px" }}>
                            <input type="radio" name="payment-method" id="cash-payment" required />
                            <label htmlFor="cash-payment" className='fw-semi-bold'>Cash on Delivery</label>
                        </div>
                    </div>

                    <div className="card-details">
                        <div className='margin-block-100'>
                            <label htmlFor="name" className='fw-semi-bold'>Your Name</label><br />
                            <input type="text" placeholder='Enter your name' id='name' name='name' className='margin-block-50' required value={userInfo.name} onChange={updateInfo} />
                        </div>

                        <div className='margin-block-200'>
                            <label htmlFor="card-number">Card Number</label><br />
                            <input type="text" placeholder='Enter your card number' id='card-number' name="cardNumber" className='margin-block-50' value={userInfo.cardNumber} onChange={updateInfo} required />
                        </div>

                        <div className='expiry-cvv' style={{ gap: ".3rem" }}>
                            <div className='expiry'>
                                <label htmlFor="expiry">Expiry Date</label><br />
                                <input type="date" placeholder='Expiry Date' id='expiry' name="expiry" className='margin-block-50' value={userInfo.expiry} onChange={updateInfo} required />
                            </div>
                            <div className='cvv'>
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" placeholder='CVV' id='cvv' name="cvv" className='margin-block-50' value={userInfo.cvv} onChange={updateInfo} required />
                            </div>
                        </div>
                        <div className='flex margin-block-400' style={{ gap: "10px" }}>
                            <input type="checkbox" id='save-card' name='save-card' />
                            <label htmlFor="save-card">Save this card for a faster checkout experience</label>
                        </div>
                        <button className='button' data-type='bg-blue' type='submit'>Confirm your Pay</button>
                    </div>

                </form>
            </div>
        </>
    )
}