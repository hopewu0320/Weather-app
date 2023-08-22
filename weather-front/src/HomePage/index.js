import List from "./components/List"
import WeatherData from "./components/WeatherData"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
    const [selectedItem, setSelectedItem] = useState([]);

    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
        
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    

    return <div className="container" >
        <List data={data.data} setSelectedItem={setSelectedItem} />
        
        <WeatherData selectedItem={selectedItem} />
    </div>
}
export default HomePage;