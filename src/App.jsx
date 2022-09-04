import React from "react";
import Home from "./Home";
import Market from "./Market";
import Security from "./Security";
import Property from "./components/Property";
import Portfolio from "./Portfolio";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ()=>{
    return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/market" element={<Market/>}/>
          <Route path="/security" element={<Security/>}/>
          <Route path="/market/property1" element={
            <Property imgSrc="https://www.prestigeconstructions.com/admin/uploads/projects/meridian-park-@-the-prestige-city/meridian-park-@-the-prestige-city-featured.png"
                name="Apartments in Bengaluru"
                des="The investment offers Intelligent 2BHK apartments located in the High-Growth Airport Corridor - North Bangalore."
                address="0x189c4f9692e68e2c813aced0fc7e1e182c7c0fa5"
                />
          }/>
          <Route path="/market/property2" element={
            <Property imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLKuD8jwlcyC3rADBOpCS5n3r37YEqzxm6Q&usqp=CAU"
                name="Resorts in Goa"
                des="The investment offers 4 star luxury 72 room hotel on sale in north goa near to beach one of the most popular location in goa very prime property."
                address="0x5f836c88b75b71d2b75a92bcdb9157b307b1aaf0"
                />
          }/>
          <Route path="/market/property3" element={
            <Property imgSrc="https://is1-2.housingcdn.com/01c16c28/27a5a1db1bbe0bf0467d9aa89f0a550c/v0/fs/5_bhk_villa-for-sale-dlf_farms-New+Delhi-others.jpg"
                name="Villas in Delhi"
                des="The investment offers Beautiful 5 BHK independent house available for sale Vasant Vihar800 sq. Yards,Delhi"
                address="0x7e076c4942c8252610f625f87d8220a15c2f06a2"
                />
          }/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default App;

/*

*/