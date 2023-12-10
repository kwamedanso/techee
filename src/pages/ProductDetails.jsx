import { useParams } from 'react-router-dom'
import "components/productDeatils/styles/productDetails.css"
import useFetch from 'hooks/useFetch';
import Loader from 'components/shared/Loader';
import Main from 'components/productDeatils/Main';


export default function ProductDetails() {
    const url = "https://kwamedanso.github.io/productsDataAPI/techee.json"
    let { loading, data } = useFetch(url)

    const params = useParams();
    const productId = Number(params.id);

    const currentProduct = data?.find(product => product.id === productId)

    const sameCategory = data?.filter(item => item.category === currentProduct.category && item.id !== productId).slice(0, 5);


    if (loading) {
        return <Loader />
    } else if (data) {
        return <Main data={currentProduct} sameCategory={sameCategory} />
    }
}

