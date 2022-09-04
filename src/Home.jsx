import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import homeSVG  from "./hero-img.svg"
import { NavLink } from "react-router-dom";
const Home = ()=>{
    return (
      <>
      <div className="container-fluid home1">
        <div className="row">
           <div className="col-lg-6 hero-para ">
             <h1>Curated <br/>real estate Investments</h1>
             <p>Innovative real estate investment products for growth-focused investors.</p>
             <NavLink to="/market" ><button>Explore Investments</button></NavLink>
           </div>
           <div className="col-lg-6 hero-img ">
              <img src={homeSVG} alt="searching homes"/>
           </div>
        </div>
        </div>

          <div class="container-fluid home2">
<h2 className="section2">Why invest in real estate?</h2>
<div class="row">
  <div class="feature-box col-lg-4">
  <i class="fas fa-coins fa-6x"></i>
    <h3 class="feature-title">Passive Income</h3>
    <p>Earn income without active management</p>
  </div>
  <div class="feature-box col-lg-4">
  <i class="fas fa-sack-dollar fa-6x"></i>
    <h3 class="feature-title">Stable cash flow</h3>
    <p>Rental payments provide steady cash flow through dividend payouts</p>
  </div>
  <div class="feature-box col-lg-4">
  <i class="fas fa-balance-scale-right fa-6x"></i>
    <h3 class="feature-title">Tax advantages</h3>
    <p>There are numerous tax breaks and favorable deductions associated with real estate investing</p>
  </div>
</div>
<div class="row">
  <div class="feature-box col-lg-4">
  <i class="fas fa-chart-line fa-6x"></i>
    <h3 class="feature-title">Capital appreciation</h3>
    <p>Historically, real estate prices have increased over time</p>
  </div>

  <div class="feature-box col-lg-4">
  <i class="fas fa-lock fa-6x"></i>
      <h3 class="feature-title">Inflation protection</h3>
    <p>Home values and rents typically increase during times of inflation</p>
  </div>

  <div class="feature-box col-lg-4">
  <i class="fas fa-briefcase fa-6x"></i>
    <h3 class="feature-title">Diversification</h3>
    <p>Low correlation to other asset classes</p>
  </div>
</div>


</div>
</>
    );
}

export default Home;