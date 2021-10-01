import React, { useEffect } from "react";
import "./login.css";
import Footer from "../../Layouts/Footer/footer";
import NavbarLR from "../../Navbars/Login_Register-Navbar/navbarLR";
import LoginValidation from "../../Actions/Forms/LoginForm-Validation/loginvalidation";
import { Link } from "react-router-dom";

export default function Login() {
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    
    return (
        <div className="login-body">
            <NavbarLR />
                 <div className="login-container">
                  
                     <div className="col-md-6 col-xl-5 offset-xl-1">
                        <div className="login-form-section">
                             <Link to="/" className="login-return-link">Return To Home!</Link>
                                <div className="card-form">
                                     <LoginValidation />
                               </div>       
                        </div>
                      </div>
               
               </div>
            <Footer />
        </div>
    )
}
