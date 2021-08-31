import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./Components/Layouts/Home/home";
import Login from "./Components/Screens/Login-Screen/login";
import Register from './Components/Screens/Register-Screen/register';


function App() {
  return (
    <BrowserRouter basename="Kassiezona">
    <div className="App-Section">
            
      </div>

    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Switch>

 </BrowserRouter>
  );
}

export default App;
