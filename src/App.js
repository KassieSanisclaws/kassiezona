import React from 'react';
import './App.css';
import TopBar from "./Components/Layouts/Topbar/topbar";
import Footer from "./Components/Layouts/Footer/footer";
import Home from "./Components/Layouts/Home/home";

function App() {
  return (
    <div className="App-Section">
            <div className="Topbar-Content">
                  <TopBar />
             </div>
            <div className="Body-Content">
                  <Home />
             </div>
            <div className="Footer-Content">
                <Footer />
            </div>

   
</div>
  );
}

export default App;
