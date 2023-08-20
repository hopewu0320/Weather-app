import List from "./components/List"
import Picture from "./components/Picture"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
    const [data2P, setData2P] = useState(null);

    const fetchData = async ()=>{
        const weatherResponse = await fetch('/weather')
        console.log("Fetch complete")
        const weatherData = await weatherResponse.json()
        setData(weatherData)
        
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    

    return <div className="container">
        <List data={data.data} setData={setData} />
        <div className="picture">
            <Picture  />
        </div>
    </div>
}
export default HomePage;