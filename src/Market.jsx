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
            <img className="card-img-top" src="https://r1imghtlak.mmtcdn.com/9ff7b820fdd511ecb0180a58a9feac02.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg" alt="apartment image"/>
              <h5 class="card-title">Hotels in Bengaluru</h5>
              <p class="card-text">The hotel is having 56 rooms one restaurant,one bar ,spa very near to electronic city and Kormangla City Center.</p>
             </div>  
          <NavLink to="/market/property1"><a href="#" class="btn btn-primary">Invest now</a></NavLink>
          </div>
          </div>

        <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-body">
            <img className="card-img-top" src="https://r1imghtlak.mmtcdn.com/c5c9d810869311e4b8f032e76f7e45c9.jfif?&output-quality=75&downsize=583:388&output-format=jpg" alt="apartment image"/>
              <h5 class="card-title">Hotels in Jaipur</h5>
              <p class="card-text">A 4-star hotel centrally located in Jaipur with all attractions within close proximity, such as Hawa Mahal.</p>
             </div>  
             <NavLink to="/market/property2"><a href="#" class="btn btn-primary">Invest now</a></NavLink>
          </div>
        </div>
        
        <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="card">
            <div class="card-body">
            <img className="card-img-top" src="https://r1imghtlak.mmtcdn.com/86d7406644b111ea9b260242ac110002.jpg?&output-quality=75&downsize=243:162&output-format=jpg" alt="apartment image"/>
              <h5 class="card-title">Hotels in Delhi</h5>
              <p class="card-text">he property is well connected to the city and is located near the important locations of Delhi.</p>
             </div>  
             <NavLink to="/market/property3"><a href="#" class="btn btn-primary">Invest now</a></NavLink>
          </div>
        </div>

      </div>
    )
}

export default Market;

