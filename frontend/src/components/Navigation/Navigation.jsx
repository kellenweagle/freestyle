import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { useSelector } from "react-redux";
import Logo from "./Logo"

function Navigation() {
  const user = useSelector((state) => state.session.user);


  return (
    <div className="nav-container">
      <Logo />
      <div className="nav-right">
      {user !== null ? user.id === 1 ? <NavLink to="/products">Post New Product</NavLink> : null : null}
        <ul>
          <li>
            <ProfileButton />
          </li>
          {user && (
            <li>
              {user.profileImg?
              <img
                src={user.profileImg}
                style={{height: "70px", width: '70px', borderRadius: "50%"}}
              />: null}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
