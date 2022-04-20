import classes from './NotificationButton.module.css';

const NotificationButton : React.FC = () =>{
    return(
        <div className={classes.notificationContainer}>

            <div className={classes.notificationIcon}>
                <img src = 'https://uxwing.com/wp-content/themes/uxwing/download/37-communication-chat-call/notification-bell.png'/>
            </div>

            <div className={classes.notifications}>
                <h1>No recent notifications</h1>
            </div>
        </div>
    )
}

export default NotificationButton;

