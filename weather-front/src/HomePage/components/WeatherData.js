import "../index.css"


const WeatherData = ({selectedItem})=>{
    //console.log(selectedItem)
    
    
    return <div className="picture">
        {selectedItem.Loc}
    </div>
       
}

export default WeatherData;