import "../index.css"
import WeatherData from "./WeatherData"
import {useEffect,useState} from "react"
function refresh(){
    alert('Hello')
}
/*
onClick後 會去後端拉資料 顯示在前端(跳頁) onChange
*/


const List = ({data,setSelectedItem})=>{
    // const users = [
    //     {name:"Pedro",age:21},
    //     {name:"Hope",age:23}
    // ]
    
    /*
    const 很多個變數 = setState()
    */ 
   var d = []
    
    const PredictWeather = (e) =>{
        
        
        const selectedIndex = e.target.selectedIndex;
        const selectedData = data[selectedIndex];
        //d['data'] =  selectedData  //給WeatherData 使用map必須是array 不能是object
        setSelectedItem(selectedData);
        console.log(selectedData)
        //console.log(typeof(d))
        //return Picture data={e.target.value}/>
    }
    
    return <div className="list">
        <select name="WeatherData" onChange={PredictWeather}>
            {data && data.map((item)=>{
                return(
                    <option>
                        <div>
<<<<<<< HEAD
                            {item.Loc} DayTemp:{item.DayTemp.toFixed(2)} NightTemp:{item.DayTemp.toFixed(2)} WindSpeed:{item.WindSpeed.toFixed(2)} DayHumidity:{item.DayHumidity.toFixed(2)} NightHumidity:{item.NightHumidity.toFixed(2)}
=======
                            {item.Loc} {item.DayTemp}
>>>>>>> 6ae00057 (API connection OK)
                        </div>
                    </option>
                )
            })}
        </select>
        
    </div>     
}

export default List;