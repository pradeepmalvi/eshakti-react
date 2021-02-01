import { useReducer, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductCategory,
  getHomePageProducts,
} from "./store/home/homeAction";

// responsive styles
import "./mediaqueries/main.scss";

// context
import { appReducer } from "./context/reducers/appReducer";

// custom components
import Home from "./pages/Home.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom components imports
import TopNav from "./components/topNavbar/TopNav.component";
import Navbar from "./components/navBar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import BottomBar from "./components/bottom-bar/BottomBar.component";
import ProductDetails from "./components/productDetails/ProductDetails";
import CategoryPage from "./components/category-page/CategoryPage.component";
import CartPage from "./components/cartPage/CartPage";
import ShippingInfoPage from "./components/shipping-info-page/ShippingInfoPage.component";
import MobileMenuSidebar from "./components/mobile-menu-sidebar/MobileMenuSidebar.component";
import { AppContext } from "./context/context";

// importing axios
import Axios from "./axios/axios";
import requests from "./axios/requests";

import { SET_CATEGORIES } from "./context/action.types";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [appState, dispatchAppState] = useReducer(appReducer, {
    menu_sidebar: "",
    nav_links: [],
  });

  useEffect(() => {
    // Axios.get("/product-categories").then((res) => {
    //   dispatchAppState({
    //     type: SET_CATEGORIES,
    //     payload: res.data.product_categories,
    //   });
    // });

    dispatch(getProductCategory());
    dispatch(getHomePageProducts());
  }, []);

  return (
    <div className="App">
      {/* homepage of our app */}
      <AppContext.Provider value={{ appState, dispatchAppState }}>
        <Router>
          <TopNav />
          <Navbar />

          <MobileMenuSidebar />

          {/* Routes */}
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/product-details/:id"
            component={ProductDetails}
          ></Route>
          <Route
            exact
            path="/category-page/:id"
            component={CategoryPage}
          ></Route>
          <Route exact path="/cart" component={CartPage}></Route>
          <Route
            exax
            path="/shipping-info"
            component={ShippingInfoPage}
          ></Route>

          {/* Footer */}
          <Footer />
          <BottomBar />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
