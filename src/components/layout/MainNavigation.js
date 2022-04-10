import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
const MainNavigation =() =>{
  return (
      <header className={classes.header}>
        <div className={classes.logo}>Greate Quote</div>
          <nav className={classes.nav}> 
            <ul>
              <li><NavLink to='/quotes' activeclassName={classes.active}>All Quotes</NavLink></li>
              <li><NavLink to='/new-quote' activeclassName={classes.active}>Add New Quote</NavLink></li>  
            </ul>  
          </nav>  
      </header>
  )
}
export default MainNavigation;