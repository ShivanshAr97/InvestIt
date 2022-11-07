import React from "react";
import Home from "./Home";
import Market from "./Market";
import Security from "./Security";
import Property from "./components/Property";
import Portfolio from "./Portfolio"
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
            <Property imgSrc="https://r1imghtlak.mmtcdn.com/9ff7b820fdd511ecb0180a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg"
                name="Hotels in Bengaluru"
                des="The hotel is having 56 rooms one Restaurant,one BAR ,Spa very near to electronic city and Kormangla City Center ,nearest shopping centre is More store."
                address="0x189c4f9692e68e2c813aced0fc7e1e182c7c0fa5"
                />
          }/>
          <Route path="/market/property2" element={
            <Property imgSrc="https://r1imghtlak.mmtcdn.com/c5c9d810869311e4b8f032e76f7e45c9.jfif?&output-quality=75&downsize=583:388&output-format=jpg"
                name="Hotels in Jaipur"
                des="A 4-star hotel centrally located in Jaipur with all attractions within close proximity, such as Hawa Mahal. Relax and unwind at the Rooftop pool with city views."
                address="0x5f836c88b75b71d2b75a92bcdb9157b307b1aaf0"
                />
          }/>
          <Route path="/market/property3" element={
            <Property imgSrc="https://r1imghtlak.mmtcdn.com/86d7406644b111ea9b260242ac110002.jpg?&output-quality=75&downsize=243:162&output-format=jpg"
                name="Hotels in Delhi"
                des="The property is well connected to the city and is located near the important locations of Delhi and offers modern amenities like a coffee shop, play area, activity centre, conference rooms, etc."
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
