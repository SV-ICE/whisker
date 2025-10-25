import { NavLink } from "react-router-dom";
import logo from "./../../logo.png";
import s from "./Header.module.css";


const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.logoContainer}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <p className={s.title}>Whisker</p>
            </div>
            <div className={s.authBlock}>
                {props.isAuth ? (
                    <div className={s.authUser}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle></svg>
                        {props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
