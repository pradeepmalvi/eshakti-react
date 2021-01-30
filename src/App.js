// custom components
import Home from "./pages/Home.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom components imports
import TopNav from "./components/topNavbar/TopNav.component";
import Navbar from "./components/navBar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import BottomBar from "./components/bottom-bar/BottomBar.component";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* homepage of our app */}
      <TopNav />
      <Navbar />

      {/* Routes */}
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product-details" component={ProductDetails}></Route>
      </Router>

      {/* Footer */}
      <Footer />
      <BottomBar />
    </div>
  );
}

export default App;
