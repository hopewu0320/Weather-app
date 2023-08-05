import "../index.css"
import {useEffect,useState} from "react"
function refresh(){
    alert('Hello')
}
/*
onClick後 會去後端拉資料 顯示在前端
*/
/*
next : json Server資料 放在表單
*/ 
const List = ({data})=>{
    
    
    const users = [
        {name:"Pedro",age:21},
        {name:"Hope",age:23}
    ]
    
    console.log(users)
    return <div className="list">
        {users.map((user)=>{
            return(
                <div>{user.name}</div>
            )
        })}
    </div>     
}

export default List;