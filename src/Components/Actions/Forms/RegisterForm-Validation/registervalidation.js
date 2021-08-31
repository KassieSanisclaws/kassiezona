import React from "react";


// the below holds the inital state of the form fields being observed and awaiting change from input user. // 
// by default the fields are set to empty & managed upon change via input by user. //
const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nameError: "",
    emailError: "",
    passswordError: "",
    confirmPasswordError: "",
    
};

export default class RegisterValidation extends React.Component{
      state = initialState;

// created (2) functions beblow for the form to i: handle the form validation & ii: to handle the change in the fields which will be passed value key. // 
// this function handles changes from the input fields of the form. //
  handleChange = (e) => {
    const isCheckedbox = (e).target.type === "checkbox";
    this.setState({
    [ (e).target.name ]: isCheckedbox
     ? (e).target.checked 
     : (e).target.value 
    });
  };

  // validation funtion checking the form  submitted for the errors from the form. // 
  validation = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";


    if(!this.state.name){
        nameError = "Name field cannot be blank";
    }

    if(nameError){
        this.setState({ nameError });
        return false;
    
    }

    if(!this.state.email){
       
    }

    if(emailError){
        this.setState({ emailError });
    }

  /* this below are the error messages handling the test cases of the form I am saying that has to be included before submitting. */   
         if(!this.state.password || this.state.password !== this.state.confirmPassword){
              alert("Password & or Confirmed Password Do Not Match!");
       }

    return true;
   };


// this function handles the form when submitted by user and checks the validation. //
  submitHandler = (e) => {
    (e).preventDefault(); // this line prevents the default state of the form being submitted. //
 // now creating a costant variable to listen and apend the validation errors to the form validating when submitted by user.//
  const isValidForm = this.validation();
   if(isValidForm){
       console.log(this.state);
   
 // this line resetting the state to the default intial state & clears the form.// 
    this.setState(initialState); 
    }
  };

  render(){ 
      return(

        <form onSubmit={this.submitHandler}>
            
        <div className="form-card-field">
          <input  name="name"
                  type="name"
                  id="name"
                  placeholder="Enter Name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange} />
            <div style={{ fontsize: 12, color: "green"}}>
                {this.state.nameError}
            </div>
         </div>
     
     <div className="form-card-field">
          <input  name="email"
                  type="name"
                  id="email"
                  placeholder="Enter Email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange} />
         <div style={{ fontsize: 12, color: "green"}}>
              {this.state.emailError} 
         </div>
       </div>

    <div className="form-card-field">
         <input name="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange} />
         <div style={{ fontsize: 12, color: "green"}}>
             {this.passswordError}     
        </div>
    </div>
    
    <div className="form-card-field">
         <input name="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="ReEnter Password"
                value={this.state.confirmPassword}
                onChange={this.handleChange} />
        <div style={{ fontsize: 12, color: "green"}}>
            {this.confirmPasswordError}
        </div>
    </div> 
         
    <button type="submit">Register</button>    
    </form>
  )
      
  }
}