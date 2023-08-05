import List from "./components/List"
import Picture from "./components/Picture"
import {useEffect,useState} from "react"
const HomePage = () =>{
    const [data,setData] = useState({});
    
    const fetchData = (setData)=>{
        fetch('http://localhost:3000/posts/1')
        .then(res => res.json())
        .then(resdata =>{
            setData(resdata);
            console.log(resdata);
        })
    }
    useEffect(()=>{
        fetchData(setData)
    },[])

    return <div className="container">
        <List data={data.data}/>
        <Picture/>
    </div>
}
export default HomePage;