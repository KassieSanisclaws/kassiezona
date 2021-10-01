import React, { Component } from "react";
import Axios from "axios";

// the below holds the inital state of the form fields being observed and awaiting change from input user. // 
// by default the fields are set to empty & managed upon change via input by user. //
class RegisterValidation extends Component{
    constructor(props){
      super(props)
       
      this.state = {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
     }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// created (2) functions beblow for the form to i: handle the form validation & ii: to handle the change in the fields which will be passed value key. // 
// this function handles changes from the input fields of the form. //
  handleChange = (e) => {
    this.setState({
    [ (e).target.name ] : (e).target.value,
    [ (e).target.email ] : (e).target.value,
    [ (e).target.password ] : (e).target.value,
    [ (e).target.confirmPassword ] : (e).target.value,
    });
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this function handles the form when submitted by user and checks the validation. //
  submitHandler = (e) => {
    (e).preventDefault(); // this line prevents the default state of the form being submitted. //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Axios.post("url")
       .then(response => {
    // code statement variable taking the response data from backend and transform into Json.//
        const kassie = response.data   
    // response data. copde block.//
        this.setState({ kassie })
      })
    console.log(this.state);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render(){ 
   const { name, email, password, confirmPassword } = this.state;

      return(
        <form onSubmit={this.submitHandler}>
            
        <div className="form-card-field">
          <input  name="name"
                  type="name"
                  id="name"
                  placeholder="Enter Name"
                  required
                  value={name}
                  onChange={this.handleChange} />
            {/* <div style={{ fontsize: 12, color: "green"}}>
                {this.state.nameError}
            </div> */}
         </div>
     
     <div className="form-card-field">
          <input  name="email"
                  type="name"
                  id="email"
                  placeholder="Enter Email"
                  required
                  value={email}
                  onChange={this.handleChange} />
         {/* <div style={{ fontsize: 12, color: "green"}}>
              {this.state.emailError} 
         </div> */}
       </div>

    <div className="form-card-field">
         <input name="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.handleChange} />
         {/* <div style={{ fontsize: 12, color: "green"}}>
             {this.passswordError}     
        </div> */}
    </div>

    <div className="form-card-field">
         <input name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="ReEnter Password"
                value={confirmPassword}
                onChange={this.handleChange} />
        {/* <div style={{ fontsize: 12, color: "green"}}>
            {this.confirmPasswordError}
        </div> */}
    </div> 
         
    <button type="submit">Register</button>    
    </form>
  )
      
  }
}
export default RegisterValidation;