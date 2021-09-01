import React from "react";
import "./register.css";
import NavbarLR from "../../Navbars/Login_Register-Navbar/navbarLR";
import RegisterValidation from "../../Actions/Forms/RegisterForm-Validation/registervalidation";
import Footer from "../../Layouts/Footer/footer";
import { Link } from "react-router-dom";


export default function Register() {

    return (
        <div className="register-body">
              <NavbarLR /> 
              
                <div className="register-container">
              

                         <div className="col-md-6 col-xl-5 offset-xl-1">
                             <div className="register-form-section">
                                <Link to="/" className="register-return-link">Return Home</Link>
                                    <div className="card-form">
                                       <RegisterValidation /> 
                                    </div>

                             </div>
                        </div>

                             
                </div>
           <Footer />
        </div>
    )
}


