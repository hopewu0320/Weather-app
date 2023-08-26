<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b0e62e6 (90% finish need to modify CSS)
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
    
<<<<<<< HEAD
=======
import "../index.css"


const Picture = ()=>{
    
    return <div>
        <p>1234 </p>
    </div>
       
>>>>>>> d2f21de2 (儲存item in data)
=======
>>>>>>> 0b0e62e6 (90% finish need to modify CSS)
}

export default Picture;