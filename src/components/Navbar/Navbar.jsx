import Friends from "./Friends/Friends";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            {props.navItems.map(({ path, label }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                        isActive ? `${s.item} ${s.active}` : s.item
                    }>
                    {label}
                </NavLink>
            ))}
            <Friends friends={props.friends} />
        </nav>
    );
};

export default Navbar;
