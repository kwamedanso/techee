import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom'
import "components/productDeatils/styles/productDetails.css"
import Loader from 'components/shared/Loader';
const Main = lazy(() => import("components/productDeatils/Main"))

export default function ProductDetails() {
    const params = useParams();
    const productId = params.id;


    return (
        <>
            <Suspense fallback={<Loader />}>
                <Main productId={productId} />
            </Suspense>
        </>
    )
}

