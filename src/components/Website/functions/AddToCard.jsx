

export default function AddToCard(pro){
 

  let saved = JSON.parse(localStorage.getItem("products")) || [];
  let che = false;
  let position = 0;
   saved?.map((ele,ind)=>{
     if(pro.id === ele.id){
       position = ind;
       che = true;
      }
       
  })
 
  if(che){
    saved[position].count +=1
   localStorage.setItem("products",JSON.stringify(saved))
  }else{
      saved.push({...pro,count:1})
    localStorage.setItem("products",JSON.stringify(saved))
  }



}