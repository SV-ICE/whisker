import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        navItems: state.sidebar.navItems,
        friends: state.sidebar.friends
    };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;