import "../index.css"
import Picture from "./Picture"

const WeatherData = ({selectedItem})=>{
    
    
    
    return <div className="WeatherData">
        <Picture selectedItem={selectedItem}/>
    </div>
    
}

export default WeatherData;