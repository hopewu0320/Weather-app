import "../index.css"
import WeatherData from "./WeatherData"
import Sunny from '../../image/Sunny.jpg'
import Rainy from '../../image/Rainy.jpg'
import {useEffect,useState} from "react"
function refresh(){
    alert('Hello')
}
/*
onClick後 會去後端拉資料 顯示在前端(跳頁) onChange
*/


const List = ({data,setSelectedItem,selectedItem})=>{
    // const users = [
    //     {name:"Pedro",age:21},
    //     {name:"Hope",age:23}
    // ]
    
    /*
    const 很多個變數 = setState()
    */ 
   
    
    const PredictWeather = (e) =>{
        const selectedIndex = e.target.selectedIndex;
        const selectedData = data[selectedIndex];
        setSelectedItem(selectedData);
    }
    
    
    return <div className="ListData">
        <select  onChange={PredictWeather} className="list">
            {data && data.map((item)=>{
                return(
                    <option>
                        <div >                      
                            {item.Loc} DayTemp:{item.DayTemp.toFixed(2)} NightTemp:{item.DayTemp.toFixed(2)} WindSpeed:{item.WindSpeed.toFixed(2)} DayHumidity:{item.DayHumidity.toFixed(2)} NightHumidity:{item.NightHumidity.toFixed(2)}                  
                        </div>
                    </option>
                )
            })}
        </select>
        {selectedItem.Guess==selectedItem.Weather ?
        <div className="ShowCorrect">
            <div className="OX">
                <p style={{color: 'green'}}>
                    O
                </p>
            </div>
            <div className="correction">
                1234
            </div>
        </div>:
        <div className="ShowCorrect">
            <div className="OX">
                <p style={{color: 'red'}}>
                    X  {selectedItem.Guess ? "Sunny" : "Rainy"} => {selectedItem.Guess ? "Rainy" : "Sunny"}
                </p>
            </div>
            <div className="correction">
                1234
            </div>
        </div>
        }
    </div>     
}

export default List;