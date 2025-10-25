import s from './Friends.module.css';

const Friends = ({friends}) => {
	return (
		<div className={s.friends}>
			<h3 className={s.title}>Friends</h3>
			<ul className={s.friendList}>
				{friends.map(friend => {
					return (
						<li key={friend.id} className={s.friend}>
							<div className={s.avatar}>
								<img src={friend.avatar} alt="User avatar" />
							</div>
							<p className={s.name}>{friend.name}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Friends;