import { data_repeted } from "./data_repeted";
import Card from "./Card";
import "./Allskiles.css"
import "./animation.css"

export default function AllSkiles(){

      const  renderCards = data_repeted.map((el, index) => {
        return <Card key={index} url={el.url} />;
      });
   

    return(
    <div Class="BoxAnim">
      <h2 Class="pertners">Our Partners</h2>
      <div Class="d-flex"   style={{
        width: "1300px",
    animationPlayState: "running"
        }}>
    
           {renderCards}
     
      </div>

    </div>
    )
}