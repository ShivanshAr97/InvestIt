import React, { useEffect, useState} from "react";
import {ethers} from "ethers";
import tokenabi from "../Tokenabi.json";
import "./Property.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"


const Property = (props)=>{

   
    const [message, setMessage] = useState(<></>);
    const [shareData, setShareData]=useState();

   
    const tabulate = async ()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(props.address, tokenabi, signer);

      try{
         const e = await contractInstance.display();
         
         
         for(let i=0;i<e[0].length;i++){
             if(parseInt(e[0][i]._hex,16)!=0){
                 let obj = {
                    price:parseInt(e[0][i]._hex,16),
                    share:parseInt(e[1][i]._hex,16),
                    contractAddress:e[2][i]
                 }
                 setShareData(obj);
             }
         }

         console.log(shareData);
      }catch(err){
         console.log(err);
      }
    }
    
    useEffect(()=>{
      tabulate();
  },[]);
    
    const formHandler = async (e)=>{
         e.preventDefault();

         const data = new FormData(e.target);
         if(window.ethereum ==undefined){
            alert("Install Metamask");
         }
         const provider = new ethers.providers.Web3Provider(window.ethereum);
       /*  const contractInstance = new ethers.Contract("0x4503dfde7d531a8514d417178de77336f5b79be2",tokenabi,provider);

         const getData = await contractInstance.display();
         console.log(getData);*/

         await provider.send("eth_requestAccounts", []);
         const signer = await provider.getSigner();
         const contractInstance = new ethers.Contract(props.address, tokenabi, signer);
         let values = data.get("price")*data.get("shares")*1000000000000000000;
         values = values.toString();
         try{
            const d = await contractInstance.buyShares(data.get("shares"),data.get("addr"),{value: values});
            setMessage(<h1 className="success">Transaction success</h1>)
            tabulate();
         }catch(e){
            setMessage(<h1 className="success">Transaction failed</h1>);
            alert("Transaction failed. Please enter the correct details");
         }finally{
            setTimeout(tabulate,20000);
         }
         
    }

    return (<div>
        <div className="header">
             <h1>{props.name}</h1>
             <p>{props.des}</p>
             <img src={props.imgSrc}/>
        </div>

        <div className="available">
           <h1>Available Shares</h1>

           <table class="table">
              <thead>
                 <tr>
                   <th scope="col">Available Shares</th>
                   <th scope="col">Price of Share</th>
                   <th scope="col">Address of Seller</th>
                </tr>
             </thead>
           <tbody>
              <tr>
                  <td>{shareData!=undefined?shareData.share:"-"}</td>
                  <td>{shareData!=undefined?(shareData.price/1000000000000000000):"-"}</td>
                  <td>{shareData!=undefined?shareData.contractAddress:"-"}</td>
             </tr>
           </tbody>
           </table>
         
        </div>
        <form onSubmit={formHandler}>
          <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Address</label>
             <input name="addr" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter the address"/>  
          </div>
          <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Number of Tokens</label>
             <input name="shares" type="number" class="form-control" id="exampleInputEmail1" placeholder="Enter the number of tokens"/>  
          </div>
          <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Price in eth</label>
             <input name="price" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter the price in eth"/>  
          </div>
          <button type="submit" class="btn btn-primary" >Buy now!</button>
        </form>
         {message}
    </div>)
}

export default Property;