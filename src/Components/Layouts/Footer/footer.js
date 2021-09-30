import "./footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationIcon from "@material-ui/icons/LocationCity";
import CityIcon from "@material-ui/icons/PlaceOutlined"
import LinkedinIcon from "@material-ui/icons/LinkedIn"


export default function footer() {
    return (
        <div>
            <div className="footer-body">
                     <div className="footer-container">
               
                           
                           <div className="footer-content">
                                 <div className="footer-banner">
                                    <a href="/"><GitHubIcon className="icon1"/></a>
                                   <a href="/"><InstagramIcon className="icon2"/></a>
                                   <a href="/"><TwitterIcon className="icon3"/></a>
                                  </div>


                               <div className="footer-content-container">
                                   <div className="footer-content-container-card1">
                                       <h2>About:</h2>
                                      <div className="card1-about-kassiezona">
                                          <p> KassieZona, <br/>
                                              An Eccommerce Sci-Fi exploration of the community of Gundam model grades enthusiest collectors.
                                              Our site brings scalable ac tion models you enjoyede growing up and love, from your favourite Gundam
                                              series to Gundam movies/arks.
                                              We also have a chat community server of collectors and embrace the Zaft Mobile Wars!.
                                              KassieZona appriciates and Welcomes You.
                                          </p>
                                      </div>
                                   </div>


                                   <div className="footer-content-container-card2">
                                       <h2 className="card2-h2">Specials:</h2>
                                      <div className="card2-carousel">
                                          <a href="/"><div className="carousel-card1"></div></a>
                                          <div className="carousel-card2"></div>
                                          <div className="carousel-card3"></div>
                                          <div className="carousel-card4"></div>
                                      </div>
                                   </div>


                                   <div className="footer-content-container-card3">
                                       <h2>Contact</h2>
                                      <a href="/"><PhoneIcon className="icon4"/>+1-416-997-1111</a>
                                      <br/>
                                      <a href="/"><EmailIcon className="icon5"/>ByteCBDeveloping@Gmail.com</a>
                                      <br/>
                                      <a href="/"><LocationIcon className="icon6"/>Brampton, Ontario</a>
                                      <br/>
                                      <a href="/"><CityIcon className="icon7"/>Canada</a>
                                      <br/>
                                      <a href="/"><LinkedinIcon className="icon8"/>Kassie Sanisclaws</a>
                                      <br/>
                                   </div>
                               </div>
                           <div className="footer-closing-content">
                               <h3> ©2021CopyRight: ByteCodeBlack</h3>
                           </div>

                           </div>
                    </div>
            </div>
        </div>
    )
}
