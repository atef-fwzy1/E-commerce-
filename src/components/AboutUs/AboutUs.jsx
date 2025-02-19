import "./AboutUs.css"
export default function AboutUs(){

    return(
        <div className="hero">
         <div className="left-section">
              <div className="image-con">
                      <img className="avatar" src="./me-icon.png" alt="error"/>
                      <img className="virifyed" src="./verified.png" alt="error"/>
                       <span className="outer"><span className="iner"></span>Online</span>
               </div> 
                <div className="text-cont">
                     <h1>Software Engineer , Mern Stack Deverloper  .</h1>
                     <span>I’m Atef, a Software Engineer  and Mern Stack Dev  based in EGYPT. Countact Us To More Information </span>
                </div>
                <ul className="linkes">
                       
                    <> <li><a src="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-square-whatsapp"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-github"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-linkedin"></i></a></li></>
                   

                </ul>
              
         </div>
        </div>
    )
}