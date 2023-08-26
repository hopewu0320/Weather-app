import "../index.css"
<<<<<<< HEAD
import WeatherData from "./WeatherData"
=======
import Picture from "./Picture"
>>>>>>> d2f21de2 (儲存item in data)
import {useEffect,useState} from "react"
function refresh(){
    alert('Hello')
}
/*
onClick後 會去後端拉資料 顯示在前端(跳頁) onChange
*/


<<<<<<< HEAD
const List = ({data,setSelectedItem})=>{
=======
const List = ({data,setData})=>{
>>>>>>> d2f21de2 (儲存item in data)
    // const users = [
    //     {name:"Pedro",age:21},
    //     {name:"Hope",age:23}
    // ]
    
    /*
    const 很多個變數 = setState()
    */ 
<<<<<<< HEAD
   var d = []
    
=======
   
    const [selectedItem, setSelectedItem] = useState(null);
>>>>>>> d2f21de2 (儲存item in data)
    const PredictWeather = (e) =>{
        
        
        const selectedIndex = e.target.selectedIndex;
        const selectedData = data[selectedIndex];
<<<<<<< HEAD
        //d['data'] =  selectedData  //給WeatherData 使用map必須是array 不能是object
        setSelectedItem(selectedData);
        console.log(selectedData)
        //console.log(typeof(d))
=======
        setSelectedItem(selectedData);
        console.log(selectedData)
>>>>>>> d2f21de2 (儲存item in data)
        //return Picture data={e.target.value}/>
    }
    
    return <div className="list">
        <select name="WeatherData" onChange={PredictWeather}>
            {data && data.map((item)=>{
                
                return(
                    <option>
                        <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                            {item.Loc} DayTemp:{item.DayTemp.toFixed(2)} NightTemp:{item.DayTemp.toFixed(2)} WindSpeed:{item.WindSpeed.toFixed(2)} DayHumidity:{item.DayHumidity.toFixed(2)} NightHumidity:{item.NightHumidity.toFixed(2)}
=======
                            {item.Loc} {item.DayTemp}
>>>>>>> 6ae00057 (API connection OK)
=======
                            {item.Loc} DayTemp:{item.DayTemp.toFixed(2)} NightTemp:{item.DayTemp.toFixed(2)} WindSpeed:{item.WindSpeed.toFixed(2)} 
                            DayHumidity:{item.DayHumidity.toFixed(2)} NightHumidity:{item.NightHumidity.toFixed(2)}
>>>>>>> 46656af3 (取前兩位)
=======
                            {item.Loc} DayTemp:{item.DayTemp.toFixed(2)} NightTemp:{item.DayTemp.toFixed(2)} WindSpeed:{item.WindSpeed.toFixed(2)} DayHumidity:{item.DayHumidity.toFixed(2)} NightHumidity:{item.NightHumidity.toFixed(2)}
>>>>>>> d2f21de2 (儲存item in data)
                        </div>
                    </option>
                )
            })}
        </select>
        
    </div>     
}

export default List;