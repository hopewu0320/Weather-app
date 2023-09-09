import Sunny2 from '../../image/Sunny2.jpg'
import Rainy2 from '../../image/Rainy2.jpg'
import "../index.css"
const Picture = ({selectedItem}) => {
    if(selectedItem.Guess){
        return <div className="Picture" style={{backgroundColor: "#246d83"}}>
            <img src={Sunny2} alt="Sunny2" />
        </div>
    }else{
        return <div className="Picture" style={{backgroundColor: "#2f3d7c"}}>
            <img src={Rainy2} alt="Rainy2" />
        </div>
    }
    
}

export default Picture;