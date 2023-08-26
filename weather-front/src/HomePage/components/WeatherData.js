import "../index.css"
<<<<<<< HEAD
import Picture from "./Picture"

const WeatherData = ({selectedItem})=>{
    
    
    
    return <div className="WeatherData">
        <Picture selectedItem={selectedItem}/>
    </div>
    
=======


const WeatherData = ({selectedItem})=>{
    //console.log(selectedItem)
    
    
    return <div className="picture">
        {selectedItem.Loc}
    </div>
       
>>>>>>> b131fc95 (傳送成功)
}

export default WeatherData;