import "../index.css"
<<<<<<< HEAD
<<<<<<< HEAD
import WeatherData from "./WeatherData"
=======
import Picture from "./Picture"
>>>>>>> d2f21de2 (儲存item in data)
=======
import WeatherData from "./WeatherData"
>>>>>>> b131fc95 (傳送成功)
import {useEffect,useState} from "react"
function refresh(){
    alert('Hello')
}
/*
onClick後 會去後端拉資料 顯示在前端(跳頁) onChange
*/


<<<<<<< HEAD
<<<<<<< HEAD
const List = ({data,setSelectedItem})=>{
=======
const List = ({data,setData})=>{
>>>>>>> d2f21de2 (儲存item in data)
=======
const List = ({data,setSelectedItem})=>{
>>>>>>> b131fc95 (傳送成功)
    // const users = [
    //     {name:"Pedro",age:21},
    //     {name:"Hope",age:23}
    // ]
    
    /*
    const 很多個變數 = setState()
    */ 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   var d = []
=======
   
>>>>>>> 9a0cf5ce (Picture and font size FIN)
    
=======
   
    const [selectedItem, setSelectedItem] = useState(null);
>>>>>>> d2f21de2 (儲存item in data)
=======
   var d = []
    
>>>>>>> b131fc95 (傳送成功)
    const PredictWeather = (e) =>{
        const selectedIndex = e.target.selectedIndex;
        const selectedData = data[selectedIndex];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b131fc95 (傳送成功)
        //d['data'] =  selectedData  //給WeatherData 使用map必須是array 不能是object
        setSelectedItem(selectedData);
        console.log(selectedData)
        //console.log(typeof(d))
<<<<<<< HEAD
=======
        setSelectedItem(selectedData);
        console.log(selectedData)
>>>>>>> d2f21de2 (儲存item in data)
=======
>>>>>>> b131fc95 (傳送成功)
        //return Picture data={e.target.value}/>
=======
        setSelectedItem(selectedData);
>>>>>>> 9a0cf5ce (Picture and font size FIN)
    }
    
    return <div className="list">
        <select  onChange={PredictWeather}>
            {data && data.map((item)=>{
                return(
                    <option>
<<<<<<< HEAD
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
=======
                        <div >
                            <p >
                                {item.Loc} DayTemp:{item.DayTemp.toFixed(2)} NightTemp:{item.DayTemp.toFixed(2)} WindSpeed:{item.WindSpeed.toFixed(2)} DayHumidity:{item.DayHumidity.toFixed(2)} NightHumidity:{item.NightHumidity.toFixed(2)}
                            </p>
>>>>>>> 9a0cf5ce (Picture and font size FIN)
                        </div>
                    </option>
                )
            })}
        </select>
        
    </div>     
}

export default List;