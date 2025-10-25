import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import dafaultAvatar from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />;
    }

    return (
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className={s.info}>
                <img className={s.avatar} src={profile.photos.large || dafaultAvatar} alt="" />
                <div className={s.title}>
                    <p className={s.name}>{profile.fullName}</p>
                    <span className={s.about}>{profile.aboutMe}about me</span>
                    <div className={s.jobs}>
                        <div>
                            {profile.lookingForAJob ? (
                                <span>Ищу работу</span>
                            ) : (
                                <span>Не ищу работу</span>
                            )}
                        </div>
                        <div>{profile.lookingForAJobDescription || ""}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
