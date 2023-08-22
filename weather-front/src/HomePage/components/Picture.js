import Sunny from '../../image/Sunny.jpg'
import Rainy from '../../image/Rainy.jpg'
import "../index.css"
const Picture = ({selectedItem}) => {
    if(selectedItem.Guess){
        return <div >
            <img src={Sunny} alt="Sunny"/>
        </div>
    }else{
        return <div >
            <img src={Rainy} alt="Rainy" />
        </div>
    }
    
}

export default Picture;