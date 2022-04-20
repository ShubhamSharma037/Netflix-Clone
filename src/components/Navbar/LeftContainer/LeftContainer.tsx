import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './LeftContainer.module.css'
import logo  from '../../../assets/photos/logo.png'

const LeftContainer : React.FC = () =>{
    return(
        <div className={classes.leftNavitemsContainer}>

            <NavigationItems>
                <NavigationItem path='/'><img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'/></NavigationItem>
                <NavigationItem path='/'>Home</NavigationItem>
                <NavigationItem path='/tv-shows'>TV Shows</NavigationItem>
                <NavigationItem path='/movies'>Movies</NavigationItem>
                <NavigationItem path='/new'>{`New & Popular`}</NavigationItem>
                <NavigationItem path='/my-list'>My List</NavigationItem>
            </NavigationItems>

        </div>
    )
}

export default LeftContainer;