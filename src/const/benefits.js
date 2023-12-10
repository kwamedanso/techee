import { LiaShippingFastSolid } from "react-icons/lia";
import { TbGiftCard } from "react-icons/tb"
import { GiCardExchange } from "react-icons/gi"

const benefits = [
    {
        id: 0,
        icon: <LiaShippingFastSolid />,
        title: "Free Shipping",
        desc: "For all orders over $100"
    },
    {
        id: 1,
        icon: <GiCardExchange />,
        title: "Return & Refund",
        desc: "Return money within 30 days"
    },
    {
        id: 2,
        icon: <TbGiftCard />,
        title: "Gift Voucher",
        desc: "20% off when you shop online"
    }
]

export default benefits;