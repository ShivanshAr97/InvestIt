import React, { useEffect, useState } from "react";
import {ethers} from "ethers";
import tokenabi from "./Tokenabi.json";


const addresses = ["0x189c4f9692e68e2c813aced0fc7e1e182c7c0fa5","0x5f836c88b75b71d2b75a92bcdb9157b307b1aaf0","0x7e076c4942c8252610f625f87d8220a15c2f06a2"];
const Portfolio =  ()=>{

    const [share1,setShare1] = useState(0);
    const [share2,setShare2] = useState(0);
    const [share3,setShare3] = useState(0);

    useEffect(()=>{
        try{

            for(let i=0;i<3;i++){
              getData(addresses[i],i+1);
            }
            
        }catch(e){
            console.log(e);
        }
    },[]);

    const getData = async(addr,index)=>{
        if(window.ethereum ==undefined){
            alert("Install Metamask");
         }
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         const accounts = await ethereum.request({method:"eth_requestAccounts"});
         const account = accounts[0];
         const contractInstance = new ethers.Contract(addr,tokenabi,provider);
         let hasShares=false;
          
          
         

          
                try{
                    const s = await contractInstance.showSharesOf(account);
                    if(index==1)
                    setShare1(parseInt(s._hex,16));
                    if(index==2)
                    setShare2(parseInt(s._hex,16));
                    if(index==3)
                    setShare3(parseInt(s._hex,16));
                }catch(e){
                    console.log(e);
                } 
          
          
    }

  
    return (  <>
    <div className="row">
            {share1==0 && share2==0 && share3==0?<h1 style={{textAlign:"center"}}>No investments done</h1>:<></>}
    {share1>0?<div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card">
            <div className="card-body">
            <img className="card-img-top" src="https://www.prestigeconstructions.com/admin/uploads/projects/meridian-park-@-the-prestige-city/meridian-park-@-the-prestige-city-featured.png" alt="apartment image"/>
              <h2 className="card-title">Apartments in Bengaluru</h2>
              <h6 className="card-text">Number of shares bought: {share1}</h6>
              <h6 className="card-text">Contract address is:{addresses[0]}</h6>
             </div>  
          </div>
          </div>:<></>}
    {share2>0?<div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card">
            <div className="card-body">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLKuD8jwlcyC3rADBOpCS5n3r37YEqzxm6Q&usqp=CAU" alt="apartment image"/>
              <h2 className="card-title">Resorts in Goa</h2>
              <h6 className="card-text">Number of shares bought: {share2}</h6>
              <h6 className="card-text">Contract address is:{addresses[1]}</h6>
             </div>  
          </div>
          </div>:<></>}
    {share3>0?<div className="col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div className="card-body">
            <img className="card-img-top" src="https://is1-2.housingcdn.com/01c16c28/27a5a1db1bbe0bf0467d9aa89f0a550c/v0/fs/5_bhk_villa-for-sale-dlf_farms-New+Delhi-others.jpg" alt="apartment image"/>
              <h2 className="card-title">Villas in Delhi</h2>
              <h6 className="card-text">Number of shares bought: {share3}</h6>
              <h6 className="card-text">Contract address is:{addresses[2]}</h6>
             </div>  
          </div>
          </div>:<></>}
          </div>
    </>)
}

export default Portfolio;
