import React from "react";
import "./style.css";

const AdBanner = () => {
  return (
    <div className="ad-banner-container">
      <div className="ad-track">
        <div className="ad-item">Ad #1: Special Offer - 50% OFF!</div>
        <div className="ad-item">Ad #2: New Arrivals - Shop Now!</div>
        <div className="ad-item">Ad #3: Free Shipping on All Orders!</div>
        <div className="ad-item">Ad #4: Get Exclusive Deals Today!</div>
      </div>
    </div>
  );
};

export default AdBanner;
