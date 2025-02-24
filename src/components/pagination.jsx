import "./pagination.css"
export default function Pagination({pagiNationCntrole,page,numEle}){

  return(
     <div Class="pagination">
                   <i Class="fa-solid fa-angles-left" onClick={()=>pagiNationCntrole("decrement")} ></i>
                   <span>{Math.ceil(page / Number(numEle))}</span>
                   <i Class="fa-solid fa-angles-right" onClick={()=>pagiNationCntrole("increment")}></i>
     </div>
  )
}