import { useParams } from 'react-router-dom'
import "components/productDeatils/styles/productDetails.css"
import Main from 'components/productDeatils/Main';

export default function ProductDetails() {
    const params = useParams();
    const productId = params.id;


    return (
        <>
            <Main productId={productId} />
        </>
    )
}

