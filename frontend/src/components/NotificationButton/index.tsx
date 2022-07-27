import axios from 'axios';
import icon from '../../assets/images/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';


type Props = {
    saleId: number;
}

const handleClick = ( id : number) => {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(res => {
        console.log("Sucesso")
    })
}


const NotificationButton = ( { saleId } : Props ) => {

    return (
        <div className="dsmeta-red-btn" onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="ícone" />
        </div>
    )
}


export default NotificationButton;