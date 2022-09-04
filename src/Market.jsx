import React from "react";
import { NavLink } from "react-router-dom";
import "./Market.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const Market = ()=>{
    return (
        <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-body">
            <img className="card-img-top" src="https://www.prestigeconstructions.com/admin/uploads/projects/meridian-park-@-the-prestige-city/meridian-park-@-the-prestige-city-featured.png" alt="apartment image"/>
              <h5 class="card-title">Apartments in Bengaluru</h5>
              <p class="card-text">The investment offers Intelligent 2BHK apartments located in the High-Growth Airport Corridor - North Bangalore.</p>
             </div>  
          <NavLink to="/market/property1"><a href="#" class="btn btn-primary">Invest now</a></NavLink>
          </div>
          </div>

        <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-body">
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLKuD8jwlcyC3rADBOpCS5n3r37YEqzxm6Q&usqp=CAU" alt="apartment image"/>
              <h5 class="card-title">Resorts in Goa</h5>
              <p class="card-text">The investment offers 4 star luxury 72 room hotel on sale in north goa near to beach one of the most popular location in goa very prime property.</p>
             </div>  
             <NavLink to="/market/property2"><a href="#" class="btn btn-primary">Invest now</a></NavLink>
          </div>
        </div>
        
        <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-body">
            <img className="card-img-top" src="https://is1-2.housingcdn.com/01c16c28/27a5a1db1bbe0bf0467d9aa89f0a550c/v0/fs/5_bhk_villa-for-sale-dlf_farms-New+Delhi-others.jpg" alt="apartment image"/>
              <h5 class="card-title">Villas in Delhi</h5>
              <p class="card-text">The investment offers Beautiful 5 BHK independent house available for sale Vasant Vihar800 sq. Yards,Delhi</p>
             </div>  
             <NavLink to="/market/property3"><a href="#" class="btn btn-primary">Invest now</a></NavLink>
          </div>
        </div>

      </div>
    )
}

export default Market;

