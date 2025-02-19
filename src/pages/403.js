import Button from 'react-bootstrap/Button';
import "./403.css"
import { Link } from 'react-router-dom';
let Permissions =()=>{
    return (
    <div className="page_404">
        <div className="box">
            <h1 className="status">403</h1>
             <div><span className="oops">Oops!   </span><span> ACCESS DENIED</span></div>
              <p>You dont't have permission to access this page </p>
    <Link to={"/"} > <Button variant="outline-info">Home Page</Button></Link>
        </div>

    </div>
    )
}
export default Permissions;