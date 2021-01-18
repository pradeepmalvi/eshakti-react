import React from "react";

// custom components imports
import TopNav from "../components/topNavbar/TopNav.component";
import Navbar from "../components/navBar/Navbar.component";
import HeroSection from "../components/heroSection/HeroSection.component";
import SaleBanner from "../components/saleBanner/SaleBanner.component";
import ProductListing from "../components/productListing/ProductListing.component";
import MidBanner from "../components/mid-banner/MidBanner.component";
import OurQualities from "../components/ourQualities/OurQualities.component";
import Footer from "../components/footer/Footer.component";
import BottomBar from "../components/bottom-bar/BottomBar.component";

export default function Home() {
  return (
    <div className="home">
      <SaleBanner />
      <ProductListing
        title={"Top Selling Products"}
        description={
          "In our own little way we echo that. The idea of eShakti includes all women. Everywhere, Whatever their size, shape, height and style preferences."
        }
      />

      <ProductListing
        title={"New Arrivel"}
        description={
          "In our own little way we echo that. The idea of eShakti includes all women. Everywhere, Whatever their size, shape, height and style preferences."
        }
      />
      <MidBanner />
      <OurQualities />
    </div>
  );
}
