import icon from '../../assets/images/notification-icon.svg';
import './styles.css';

const NotificationButton = () => {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="ícone" />
        </div>
    )
}


export default NotificationButton;