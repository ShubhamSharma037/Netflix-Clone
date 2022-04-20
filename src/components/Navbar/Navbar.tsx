import { useRef } from 'react';
import LeftContainer from './LeftContainer/LeftContainer';
import classes from './Navbar.module.css';
import NavigationItem from './NavigationItems/NavigationItem/NavigationItem';
import NavigationItems from './NavigationItems/NavigationItems';
import RightContainer from './RightContainer/RightContainer';


const Navbar : React.FC = () => {

  const navRef = useRef<HTMLDivElement>(null)

  window.onscroll = ()=>{
    if(window.scrollY>10){
      navRef?.current?.classList.add(`${classes.backdrop}`);
    }
    else{
      navRef?.current?.classList.remove(`${classes.backdrop}`)
    }
  }
    
  return (
    <div ref={navRef} className={classes.navbarWrapper}>
        <div className={classes.navbar}>
            <LeftContainer/>
            <RightContainer/>
        </div>
    </div>
  )
}

export default Navbar