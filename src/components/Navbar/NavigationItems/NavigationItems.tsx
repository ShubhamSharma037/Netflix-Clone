import classes from './NavigationItems.module.css'


const NavigationItems : React.FC<{children : JSX.Element[]}> = ({children} ) =>{
    return(
        <ul className={classes.navItems}>
            {children}
        </ul>
)
}

export default NavigationItems;