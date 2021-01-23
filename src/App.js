import "./mediaqueries/main.scss";

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

function App() {
  return (
    <div className="App">
      {/* homepage of our app */}
      <Router>
        <TopNav />
        <Navbar />

        {/* Routes */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product-details" component={ProductDetails}></Route>
        <Route exax path="/category-page" component={CategoryPage}></Route>
        <Route exax path="/cart" component={CartPage}></Route>
        <Route exax path="/shipping-info" component={ShippingInfoPage}></Route>

        {/* Footer */}
        <Footer />
        <BottomBar />
      </Router>
    </div>
  );
}

export default App;
