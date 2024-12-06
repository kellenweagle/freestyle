import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import './Header.css'

function Header({ isLoaded }) {

  return (
    <div className="header">
      <NavLink to="/"><Logo /></NavLink>
      {/* <div className="headerRight">
        <Navigation isLoaded={isLoaded}/>
      </div> */}
    </div>
  );
}

export default Header;