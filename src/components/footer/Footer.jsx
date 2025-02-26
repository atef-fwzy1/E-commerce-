import { NavLink } from "react-router-dom"
import "./footer.css"
export default function  Footer(){
    return(
            <footer Class="footer-section">
        <div Class="container">
            <div Class="footer-cta pt-5 pb-5">
                <div Class="row">
                    <div Class="col-xl-4 col-md-4 mb-30">
                        <div Class="single-cta">
                            <i Class="fas fa-map-marker-alt"></i>
                            <div Class="cta-text">
                                <h4>Find us</h4>
                                <span>Gerga, Sohag, Egypt</span>
                            </div>
                        </div>
                    </div>
                    <div Class="col-xl-4 col-md-4 mb-30">
                        <div Class="single-cta">
                            <i Class="fas fa-phone"></i>
                            <div Class="cta-text">
                                <h4>Call us</h4>
                                <span>+201143659774</span>
                            </div>
                        </div>
                    </div>
                    <div Class="col-xl-4 col-md-4 mb-30">
                        <div Class="single-cta" style={{boxSizing:" border-box"}}>
                            <i Class="far fa-envelope-open"></i>
                            <div Class="cta-text">
                                <h4>Mail us</h4>
                                <span>lafwzy648@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div Class="footer-content pt-5 pb-5">
                <div Class="row">
                    <div Class="col-xl-4 col-lg-4 mb-50">
                        <div Class="footer-widget">
                            <div Class="footer-logo">
                                <a href="index.html"><img style={{filter:" invert(1)", borderRadius:" 15px"}} src="./logo-site.png" Class="img-fluid" alt="logo"/></a>
                            </div>
                            <div Class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div Class="footer-social-icon" style={{margin:" 16px 0px"}}>
                                <span>Follow us</span>
                                <a href="https://dev-atef.netlify.app/"><i Class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://dev-atef.netlify.app/"><i Class="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://dev-atef.netlify.app/"><i Class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div Class=" contLink col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div Class=" footer-widget">
                            <div Class="footer-widget-heading">
                             
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                               <li><NavLink to="/about">About Us</NavLink></li>
                                <li><NavLink to="/about">services</NavLink></li>
                                <li><NavLink href="https://dev-atef.netlify.app/">portfolio</NavLink></li>
                                <li><NavLink href="https://mail.google.com/mail/u/0/#inbox">Contact</NavLink></li>
                                <li><a href="https://dev-atef.netlify.app/">Our Services</a></li>
                                <li><a href="https://dev-atef.netlify.app/">Expert Team</a></li>
                                 <li><NavLink to="/about">Contact us</NavLink></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div Class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div Class="footer-widget">
                            
                            <div Class="footer-text mb-25">
                                <p>Lorem ipsum adipisicing elit. Laborum officiis optio saepe reprehenderit aspernatur, dolores totam laboriosam! I</p>
                            </div>
                            <div Class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i Class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div Class="copyright-area">
            <div Class="container">
                <div Class="row">
                    <div Class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div Class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Atef</a></p>
                        </div>
                    </div>
                    <div Class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div Class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}