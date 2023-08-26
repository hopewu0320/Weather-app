import "../index.css"


const Text = ({selectedItem})=>{
    
    const degreeSymbol = '\u00B0';
    const gPerM3Symbol = '\u0067\u002F';
    const cubicMeterSymbol = 'm³';
    
    
    if(selectedItem.length!=0){
        return <div className="Text">
            <div>
                <p>
                    {selectedItem.DayTemp.toFixed(2)}{degreeSymbol}F / {selectedItem.NightTemp.toFixed(2)}{degreeSymbol}F
                </p>
            </div>
            <div>
                <p>
                    {selectedItem.DayHumidity.toFixed(2)}({gPerM3Symbol}{cubicMeterSymbol}) / {selectedItem.NightHumidity.toFixed(2)}({gPerM3Symbol}{cubicMeterSymbol})
                </p>
            </div>
        </div>
    }else{
        return <div className="Text">
            <div>
                <p>
                    {selectedItem.DayTemp}{degreeSymbol}F / {selectedItem.NightTemp}{degreeSymbol}F
                </p>
            </div>
            <div>
                <p>
                    {selectedItem.DayHumidity}({gPerM3Symbol}{cubicMeterSymbol}) / {selectedItem.NightHumidity}({gPerM3Symbol}{cubicMeterSymbol})
                </p>
            </div>
        </div>
    }
    
   
    
}

export default Text;