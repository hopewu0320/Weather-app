import List from "./components/List"
import WeatherData from "./components/WeatherData"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
<<<<<<< HEAD
    const [selectedItem, setSelectedItem] = useState([]);

    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
        
=======
    
<<<<<<< HEAD
    const fetchData = (setData)=>{
        fetch('http://localhost:3000/posts/1')
        .then(res => res.json())
        .then(resdata =>{
            setData(resdata);
            console.log(resdata)
        })
>>>>>>> ae3eff55 (New branch)
=======
    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
        //console.log(weatherData)
>>>>>>> 6ae00057 (API connection OK)
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    

    return <div className="container">
        <List data={data.data} setSelectedItem={setSelectedItem} />
        <WeatherData selectedItem={selectedItem}/>
    </div>
}
export default HomePage;