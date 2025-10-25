import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    portionSize,
    ...props
}) => {
    return (
        <div className={s.users}>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                portionSize={portionSize}
            />
            <div>
                {users.map((u) => (
                    <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
