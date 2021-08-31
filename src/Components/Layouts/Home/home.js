
import "./home.css";
import Footer from "../Footer/footer";
import TopBar from "../Topbar/topbar";


export default function Home() {
    return (
        <div className="home-container">
            <TopBar />
                 <div className="home-content">

                        <div className="home-grid-layout">

                                      <div className="home-section1">
                                                <h2>section working 1</h2>
                                       </div>

                                      <div className="home-section2">
                                                <h2>section working 2</h2>
                                      </div>

                                      <div className="home-section3">
                                                <h2>section working 3</h2>
                                       </div>

                                       <div className="home-section4">
                                                <h2>section working</h2>
                                       </div>

                          </div>


                 </div>
            <Footer />
        </div>
    )
}
