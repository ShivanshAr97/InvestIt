import React from "react"
import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return (
        <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li className="nav-link"><NavLink className="nav-link px-2 text-muted" to="/">Home</NavLink></li>
    <li className="nav-link"><NavLink className="nav-link px-2 text-muted" to="/market">Market</NavLink></li>
    <li className="nav-link"><NavLink className="nav-link px-2 text-muted" to="/portfolio">View Portfolio</NavLink></li>
    </ul>
    <p class="text-center text-muted">© 2021 InvestIt, Inc</p>
  </footer>
</div>
    );
}

export default Footer;