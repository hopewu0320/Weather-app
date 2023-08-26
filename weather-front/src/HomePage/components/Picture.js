<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0b0e62e6 (90% finish need to modify CSS)
import Sunny from '../../image/Sunny.jpg'
import Rainy from '../../image/Rainy.jpg'
=======
import Sunny2 from '../../image/Sunny2.jpg'
import Rainy2 from '../../image/Rainy2.jpg'
>>>>>>> 019eeef4 (OX correction)
import "../index.css"
const Picture = ({selectedItem}) => {
    if(selectedItem.Guess){
        return <div className="Picture">
            <img src={Sunny2} alt="Sunny2" />
        </div>
    }else{
        return <div className="Picture">
            <img src={Rainy2} alt="Rainy2" />
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