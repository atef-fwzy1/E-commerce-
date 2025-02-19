

export default function DeleteFromCard(id){
    const current = JSON.parse(localStorage.getItem("products"));
    let newCard = [];
    for(let i = 0 ;  i<  current.length ; i++){
        if(current[i].id !== id )
        newCard.push(current[i])
    }

    localStorage.removeItem("products")
    localStorage.setItem("products",JSON.stringify(newCard))

}
