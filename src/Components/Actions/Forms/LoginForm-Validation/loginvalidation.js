import React, { Component } from "react";

// the below holds the inital state of the form fields being observed and awaiting change from input user. // 
// by default the fields are set to empty & managed upon change via input by user. //
class LoginValidation extends Component{
    constructor(props){
      super(props)
    
      this.state = {
         email: "",
         password: "",
         }
    }

// created (2) functions beblow for the form to i: handle the form validation & ii: to handle the change in the fields which will be passed value key. // 
// this function handles changes from the input fields of the form. //
handleChange = (e) => {
  this.setState({
  [ (e).target.email ] : (e).target.value ,
  [ (e).targert.password ] : (e).target.value
   });
};

// this function handles the form when submitted by user and checks the validation. //
submitHandler = (e) => {
  (e).preventDefault(); // this line prevents the default state of the form being submitted. //
    
     console.log(this.state);
};

render(){ 
  const { email, password } = this.state;

    return(
   <form onSubmit={this.submitHandler}>
   
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
       
  <button type="submit">Register</button>    
  </form>
)
    
}
}
export default LoginValidation;