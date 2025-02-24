import Button from 'react-bootstrap/Button';
import "./403.css"
import { Link } from 'react-router-dom';
let Permissions =()=>{
    return (
    <div Class="page_404">
        <div Class="box">
            <h1 Class="status">403</h1>
             <div><span Class="oops">Oops!   </span><span> ACCESS DENIED</span></div>
              <p>You dont't have permission to access this page </p>
    <Link to={"/"} > <Button variant="outline-info">Home Page</Button></Link>
        </div>

    </div>
    )
}
export default Permissions;