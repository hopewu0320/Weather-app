import "../index.css"
import {useEffect,useState} from "react"
function refresh(){
    alert('Hello')
}
/*
onClick後 會去後端拉資料 顯示在前端(跳頁) onChange
*/

const List = ({data})=>{
    
    
    
    // const users = [
    //     {name:"Pedro",age:21},
    //     {name:"Hope",age:23}
    // ]
    
    console.log(data)
    return <div className="list">
        <select name="WeatherData">
            {data && data.map((item)=>{
                return(
                    <option>
                        <div>
                            {item.Loc} {item.DayTemp}
                        </div>
                    </option>
                )
            })}
        </select>
    </div>     
}

export default List;