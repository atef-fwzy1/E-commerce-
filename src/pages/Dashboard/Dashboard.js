
import Topbar from "../../components/Dachboard/Topbar"
import Sidebare from "../../components/Dachboard/Sidebar"
import { Outlet } from "react-router-dom"
import "./dashboard.css"
export default function Dashboard(){


    return(
    <div className="dashboard" >
  
      <div className="cont_sides">
      <Sidebare/>
      <Outlet/>
      </div>
    </div>
    )
}