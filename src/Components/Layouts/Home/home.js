import React from "react";
import "./home.css";
import Footer from "../Footer/footer";
import TopBar from "../Topbar/topbar";
import { LoremIpsum } from "react-lorem-ipsum";


export default function Home() {
    return (
        <div className="home-container">
            <TopBar />
                 <div className="home-content">

                        <div className="home-grid-layout">

                                      <div className="home-section1">
                                            <div className="home-section1-images-container">
                                                <div className="home-section1-images-card">
                                                    <h2> this is image1 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image2 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image3 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image4 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image5 card</h2>
                                                </div>
                                            </div>
                                       </div>


                                      <div className="home-section2">
                                          <div className="home-section2-header">
                                                <h2>section working 2</h2>
                                         </div>
                                          <div className="home-section2-container">
                                            <ul>
                                                <li className="lorem1"><LoremIpsum p={1} /></li>
                                                <li className="lorem2"><LoremIpsum p={1} /></li>
                                                <li><LoremIpsum p={1} /></li>
                                                <li><LoremIpsum p={1} /></li>
                                                </ul>
                                          </div>
                                      </div>


                                      <div className="home-section3">
                                             <div className="home-section3-header">
                                                  <h2>section working 3</h2>
                                             </div>
                                          <div className="home-section3-container">
                                              <LoremIpsum p={4} />
                                          </div>
                                       </div>

                                <div className="home-section4">
                                       <div className="home-section1-images-container">
                                                <div className="home-section1-images-card">
                                                    <h2> this is image1 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image2 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image3 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image4 card</h2>
                                                </div>
                                                <div className="home-section1-images-card">
                                                    <h2> this is image5 card</h2>
                                                </div>
                                            </div>
                                     </div>


                      </div>
                 </div>
            <Footer />
        </div>
    )
}
