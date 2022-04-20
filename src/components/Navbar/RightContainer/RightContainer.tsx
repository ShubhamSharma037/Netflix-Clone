import NotificationButton from '../../Buttons/NotificationButton/NotificationButton';
import Profile from '../../Buttons/Profile/Profile';
import SearchButton from '../../Buttons/SearchButton/SearchButton';
import classes from './RightContainer.module.css'


const RightContainer : React.FC = () =>{
    return(
        <div className={classes.rightNavitemsContainer}>
            <ul className={classes.UIitems}>
                <li>
                    <SearchButton/>
                </li>
                <li>
                    <NotificationButton/>
                </li>
                <li>
                    <Profile/>
                </li>
            </ul>
        </div>
    )
}

export default RightContainer;