import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Search from "./components/Search";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchFor, setSearchFor] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateQuantity = (productId, quantity, color, size) => {
    const currentCart = cart;

    if (quantity === 0) {
      const filterCart = currentCart.filter(
        (item) =>
          !(item.id === productId && item.color === color && item.size === size)
      );
      setCart(filterCart);
    } else {
      const product = currentCart.find(
        (item) =>
          item.id === productId && item.color === color && item.size === size
      );
      product.quantity = quantity;
      currentCart.map((item) => (item.id === productId ? product : null));
      setCart(currentCart);
    }

    computeTotalPrice();
  };

  const computeTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((content) => {
      const priceTotal = content.price * content.quantity;
      totalPrice += priceTotal;
    });
    setTotalPrice(totalPrice.toFixed(2));
  };

  const addToCart = (product) => {
    const sameProduct = cart.filter(
      (productInCart) =>
        productInCart.id === product.id &&
        productInCart.color === product.color &&
        productInCart.size === product.size
    );
    if (sameProduct.length === 1) {
      cart.map((productInCurrentCart) =>
        productInCurrentCart.id === sameProduct[0].id &&
        productInCurrentCart.color === sameProduct[0].color &&
        productInCurrentCart.size === sameProduct[0].size
          ? (productInCurrentCart.quantity = productInCurrentCart.quantity + 1)
          : null
      );
      setCart(cart);
    } else {
      product.quantity = 1;
      const newArray = [...cart, product];
      setCart(newArray);
    }
    computeTotalPrice();
    setShowCart(true);
  };

  const openSearch = () => {
    setShowSearch(true);
  };

  const setSearchForString = (str) => {
    setSearchFor(str);
  };

  const closeSearch = () => {
    setShowSearch(false);
    setSearchFor("");
  };

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Header
        cartLength={cart.length}
        openSearch={openSearch}
        closeSearch={closeSearch}
        openCart={openCart}
        closeCart={closeCart}
      />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/op-react-shopping-cart/products/:productId">
            <ProductPage addToCart={addToCart} />
          </Route>
          <Route exact path="/op-react-shopping-cart/products">
            <ProductPage addToCart={addToCart} />
          </Route>
          <Route exact path="/op-react-shopping-cart/catalog/:categoryId">
            <ShopPage />
          </Route>
          <Route exact path="/op-react-shopping-cart/catalog">
            <ShopPage />
          </Route>
          <Route exact path="/op-react-shopping-cart/">
            <HomePage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Search
        setSearchFor={setSearchForString}
        closeSearch={closeSearch}
        showSearch={showSearch}
        searchFor={searchFor}
      />
      <Cart
        updateQuantity={updateQuantity}
        computeTotalPrice={computeTotalPrice}
        totalPrice={totalPrice}
        cartContent={cart}
        closeCart={closeCart}
        showCart={showCart}
      />
    </div>
  );
}

export default App;
