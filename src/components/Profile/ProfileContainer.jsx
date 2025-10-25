/* import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { compose } from "redux";

const withRouterV6 = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let params = useParams();
        let navigate = useNavigate();
        let location = useLocation();
        return <Component {...props} router={{ params, navigate, location }} />;
    };
    return ComponentWithRouterProp;
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.router.navigate("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    withRouterV6,
    connect(mapStateToProps, { getProfile, getStatus, updateStatus })
)(ProfileContainer); */

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";

const ProfileContainerFunc = ({
    authorizedUserId,
    isAuth,
    getProfile,
    getStatus,
    updateStatus,
    profile,
    status,
}) => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                navigate("/login");
                return;
            }
        }
        getProfile(userId);
        getStatus(userId);
    }, [params.userId, authorizedUserId, navigate, getProfile, getStatus]);

    return <Profile profile={profile} status={status} updateStatus={updateStatus} />;
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getProfile, getStatus, updateStatus })(
    ProfileContainerFunc
);
