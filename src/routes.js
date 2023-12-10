import Home from "pages/Home";
import About from "pages/About";
import AllProducts from "pages/AllProducts";
import Checkout from "pages/Checkout";
import Cart from "pages/Cart";
import ProductDetails from "pages/ProductDetails";
import NotFound from "pages/NotFound";

const privateRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/products",
        element: <AllProducts />
    },
    {
        path: "/productdetails/:id",
        element: <ProductDetails />
    },
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "*",
        element: <NotFound />
    },
]

export default privateRoutes