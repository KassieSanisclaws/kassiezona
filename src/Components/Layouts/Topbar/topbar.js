import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./topbar.css";
import ByteCB  from "../../../images/logo/Byte_Code_Black_CompanyLogo.jpg";


export default function TopBar() {
    return (
       
            <div className="topbar-container">
                   <div className="topbar-content">


                       <header className="topbar-header-section">
                           
                           <img src={ByteCB} alt="/"/>

                            <input /><span>SEARCH</span>
                       <nav>
                           <ul>
                               <li><a href="/">NewsPortal</a></li>
                               <li><Link to="/Register">Register</Link></li>
                               <li><Link to="/Login">Login</Link></li>
                           </ul>
                       </nav>
                          <button>contact us</button>
                </header>
                      
            


  
                </div>
            </div>
    
    )
}
