import List from "./components/List"
import Picture from "./components/Picture"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
    
    const fetchData = (setData)=>{
        fetch('http://localhost:3000/posts/1')
        .then(res => res.json())
        .then(data =>{
            setData(data);
            console.log(data);
        })
    }
    useEffect(()=>{
        fetchData(setData)
    },[])

    return <div className="container">
        <List data={data}/>
        <Picture/>
    </div>
}
export default HomePage;