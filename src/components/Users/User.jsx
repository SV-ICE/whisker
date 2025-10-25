import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <div className={s.user} key={user.id}>
                <div className={s.avatarWrapper}>
                    <div className={s.avatar}>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small || userPhoto} alt="" />
                        </NavLink>
                    </div>
                    {user.followed ? (
                        <button
                            disabled={followingInProgress.some((id) => id === user.id)}
                            className={`${s.unfollow} ${s.followBtn}`}
                            onClick={() => {
                                unfollow(user.id);
                            }}>
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some((id) => id === user.id)}
                            className={`${s.follow} ${s.followBtn}`}
                            onClick={() => {
                                follow(user.id);
                            }}>
                            Follow
                        </button>
                    )}
                </div>
                <div className={s.info}>
                    <div className={s.title}>
                        <p className={s.name}>{user.name}</p>
                        <p className={s.status}>{user.status}</p>
                    </div>
                    <div className={s.location}>
                        <p className={s.city}>{"u.location"}</p>
                        <p className={s.country}>{"u.country"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
