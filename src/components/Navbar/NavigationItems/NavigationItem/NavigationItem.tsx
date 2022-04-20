import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css'



const NavigationItem : React.FC<{path? : string, children: string  | JSX.Element}> = ({path,children}) =>{

    let body ;
    let css = [classes.navItem,classes.navLinks].join(' ');

    if(path){

        body = (<NavLink to={path} className={({isActive})=>(isActive?classes.active:classes.non_active)}>
                    {children}
                </NavLink>)
    }
    else{
        css = classes.navItem
        body = children;
    }

    return(
        <li className={css}>
            {body}
        </li>
    )
}

export default NavigationItem