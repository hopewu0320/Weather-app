import "../index.css"
import Picture from "./Picture"
import Text from "./Text"
const WeatherData = ({selectedItem})=>{
    
    
    
    return <div className="WeatherData">
        <Text selectedItem={selectedItem}/>
        <Picture selectedItem={selectedItem}/>
    </div>
    
}

export default WeatherData;