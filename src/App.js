import { useState } from "react";
import Footer from "components/shared/Footer";
import Header from "components/shared/header/Header";
import { Route, Routes } from "react-router-dom";
import privateRoutes from "routes";
import Context from "context";
import ScrollToTopButton from "components/shared/ScrollToTopButton";


function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([])
  const [cartVariants, setCartVariants] = useState([])
  const [toastNotification, setToastNotification] = useState(false)

  const value = { state: { favorites: favorites, toastNotification: toastNotification, cart: cart, cartVariants: cartVariants }, actions: { setFavorites: setFavorites, setToastNotification: setToastNotification, setCart: setCart, setCartVariants: setCartVariants } }
  // console.log(cartVariants)

  return (
    <>
      <Context.Provider value={value}>
        <ScrollToTopButton />
        <Header />
        <Routes>
          {privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
