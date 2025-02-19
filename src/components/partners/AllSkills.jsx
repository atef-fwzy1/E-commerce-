import { data_repeted } from "./data_repeted";
import Card from "./Card";
import "./Allskiles.css"
import "./animation.css"

export default function AllSkiles(){

      const  renderCards = data_repeted.map((el, index) => {
        return <Card key={index} url={el.url} />;
      });
   

    return(
    <div className="BoxAnim">
      <h2 className="pertners">Our Partners</h2>
      <div className="d-flex"   style={{
        width: "1300px",
    animationPlayState: "running"
        }}>
    
           {renderCards}
     
      </div>

    </div>
    )
}